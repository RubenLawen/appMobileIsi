import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function LegalScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Mentions Légales</Text>
        <Text style={styles.text}>
          Bienvenue sur l'application "Main dans la Main pour la Palestine". En utilisant cette application, vous acceptez les présentes mentions légales.
        </Text>

        <Text style={styles.sectionTitle}>Éditeur de l'application</Text>
        <Text style={styles.text}>
          Nom de l'Association : Main dans la Main pour la Palestine{"\n"}
          Adresse : 123 Rue de l'Espoir, 75000 Paris, France{"\n"}
          Téléphone : +33 1 23 45 67 89{"\n"}
          Email : contact@maindanslamainpalestine.org{"\n"}
          Directeur de la publication : Jean Dupont
        </Text>

        <Text style={styles.sectionTitle}>Hébergement</Text>
        <Text style={styles.text}>
          L'application est hébergée par :{"\n"}
          Nom de l'Hébergeur : Hébergeur Inc.{"\n"}
          Adresse : 456 Avenue de la Paix, 75000 Paris, France{"\n"}
          Téléphone : +33 1 98 76 54 32{"\n"}
          Site web : www.hebergeur.com
        </Text>

        <Text style={styles.sectionTitle}>Propriété Intellectuelle</Text>
        <Text style={styles.text}>
          Tout le contenu présent sur cette application, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de l'association, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
        </Text>

        <Text style={styles.sectionTitle}>Données Personnelles</Text>
        <Text style={styles.text}>
          Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, de modification et de suppression concernant les données qui vous concernent. Vous pouvez exercer ce droit en envoyant un courrier électronique à l'adresse contact@maindanslamainpalestine.org.
        </Text>

        <Text style={styles.sectionTitle}>Cookies</Text>
        <Text style={styles.text}>
          Pour des besoins de statistiques et d'affichage, cette application utilise des cookies. Un cookie est un fichier texte déposé sur votre disque dur par le serveur de l'application que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations.
        </Text>

        <Text style={styles.sectionTitle}>Responsabilité</Text>
        <Text style={styles.text}>
          Les informations contenues sur cette application sont aussi précises que possible et l'application est périodiquement remise à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible.
        </Text>

        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.text}>
          Pour toute question concernant les mentions légales de cette application, vous pouvez nous contacter à l'adresse suivante : contact@maindanslamainpalestine.org
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#f0f0f0",
  },
  section: {
    marginVertical: 20,
  },
  title: {
    fontSize: 56,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#006A4E",
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#006A4E",
  },
  text: {
    fontSize: 28,
    lineHeight: 40,
    color: "#333",
  },
});
