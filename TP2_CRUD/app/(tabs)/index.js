import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { supabase } from '../supabaseClient';

export default function HomeScreen() {
  const [pizzaData, setPizzaData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const { data: pizza, error } = await supabase.from('pizza').select("*");

        if (error) {
          setError(error.message);
          return;
        }

        if (pizza) {
          setPizzaData(pizza);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    getPizza();
  }, []);

  const handlePizzaSelect = (pizza) => {
    setSelectedPizza(pizza);
  }

  const handleOrder = () => {
    if (selectedPizza) {
      const itemIndex = cart.findIndex(item => item.pizza === selectedPizza);
      if (itemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[itemIndex].quantity += quantity;
        setCart(updatedCart);
      } else {
        const newItem = { pizza: selectedPizza, quantity };
        setCart([...cart, newItem]);
      }
      setSelectedPizza(null);
      setQuantity(1);
    } else {
      alert("Veuillez sélectionner une pizza");
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  }

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : pizzaData.length > 0 ? (
        <>
          <Text style={styles.title}>Choisissez votre pizza:</Text>
          <ScrollView contentContainerStyle={styles.pizzaContainer}>
            {pizzaData.map((pizza, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.pizzaSquare, selectedPizza === pizza.pizza && styles.selectedPizzaSquare]}
                onPress={() => handlePizzaSelect(pizza.pizza)}
              >
                <Text style={styles.squareText}>{pizza.pizza}</Text>
                <Image source={{ uri: pizza.image }} style={styles.pizzaImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleOrder}>
              <Text style={styles.buttonText}>Commander</Text>
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton} onPress={handleDecreaseQuantity}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={handleIncreaseQuantity}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cartContainer}>
            <Text style={styles.cartTitle}>Panier</Text>
            {cart.map((item, index) => (
              <View key={index} style={styles.cartItemContainer}>
                <Text style={styles.cartItem}>{item.quantity} {item.pizza}</Text>
                <TouchableOpacity onPress={() => handleRemoveFromCart(index)}>
                  <Text style={styles.removeText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </>
      ) : (
        <Text style={styles.loadingText}>Chargement...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  pizzaImage: {
    width: 130,
    height: 130,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#333",
  },
  pizzaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pizzaSquare: {
    width: 360,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  selectedPizzaSquare: {
    backgroundColor: '#ffc107',
  },
  squareText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  quantityButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#333',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cartContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#333",
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  removeText: {
    fontSize: 16,
    color: 'red',
  },
  errorText: {
    color: 'red',
  },
  loadingText: {
    fontSize: 18,
    color: "#333",
  },
});
