import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../supabaseClient';

export default function CRUD() {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaName, setPizzaName] = useState('');
  const [pizzaBase, setPizzaBase] = useState('');
  const [pizzaImage, setPizzaImage] = useState('');

  useEffect(() => {
    fetchPizzas();
  }, []);

  const fetchPizzas = async () => {
    try {
      const { data: pizzasData, error } = await supabase.from('pizza').select('*');
      if (error) {
        throw error;
      }
      setPizzas(pizzasData);
    } catch (error) {
      console.error('Error fetching pizzas:', error.message);
    }
  };

  const handleAddPizza = async () => {
    if (!pizzaName || !pizzaBase || !pizzaImage) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }
    
    try {
      // Récupérer le dernier ID utilisé dans la table pizza
      const { data: lastPizza, error: lastPizzaError } = await supabase
        .from('pizza')
        .select('id')
        .order('id', { ascending: false })
        .limit(1);
        
      if (lastPizzaError) {
        throw lastPizzaError;
      }
      
      let newId = 1; // Défaut si la table est vide
      if (lastPizza.length > 0) {
        newId = lastPizza[0].id + 1; // Incrémenter le dernier ID
      }
      
      // Insérer la nouvelle pizza avec le nouvel ID
      const { error: insertError } = await supabase.from('pizza').insert([{ id: newId, pizza: pizzaName, base: pizzaBase, image: pizzaImage }]);
      if (insertError) {
        console.error('Error adding pizza:', insertError.message);
        throw insertError;
      }
      
      setPizzaName('');
      setPizzaBase('');
      setPizzaImage('');
      fetchPizzas();
      Alert.alert('Succès', 'La pizza a été ajoutée avec succès.');
    } catch (error) {
      console.error('Error adding pizza:', error.message);
      Alert.alert('Erreur', 'Une erreur est survenue lors de l\'ajout de la pizza.');
    }
  };
  
  

  const handleDeletePizza = async (id) => {
    try {
      const { error } = await supabase.from('pizza').delete().eq('id', id);
      if (error) {
        throw error;
      }
      fetchPizzas();
      Alert.alert('Suppression réussie', 'La pizza a été supprimée avec succès.');
    } catch (error) {
      console.error('Error deleting pizza:', error.message);
      Alert.alert('Erreur', 'Une erreur est survenue lors de la suppression de la pizza.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{item.pizza}</Text>
        <Text>{item.base}</Text>
        {/* Afficher l'image ici */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeletePizza(item.id)}>
        <Text style={styles.deleteButtonText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom de la pizza"
          value={pizzaName}
          onChangeText={text => setPizzaName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Base de la pizza"
          value={pizzaBase}
          onChangeText={text => setPizzaBase(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="URL de l'image"
          value={pizzaImage}
          onChangeText={text => setPizzaImage(text)}
        />
        <Button title="Ajouter une pizza" onPress={handleAddPizza} />
      </View>
      <FlatList
        data={pizzas}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  deleteButton: {
    backgroundColor: '#f00',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#fff',
  },
});
