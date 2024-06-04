import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, Image } from "react-native";
import { A } from "@expo/html-elements";
import Swiper from "react-native-swiper";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleFont}>Main dans la Main pour la Palestine</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bienvenue</Text>
        <Text style={styles.text}>
          Bienvenue sur l'application officielle de "Main dans la Main pour la Palestine". Notre mission est de lutter contre la pauvreté et la faim en Palestine en offrant une aide humanitaire essentielle aux communautés les plus démunies.
        </Text>
        <Image
          style={styles.logo}
          source="./assets/paluslogo.jpg"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos Projets</Text>
        <Text style={styles.text}>
          Nous menons plusieurs projets pour fournir des repas nutritifs, de l'eau potable, des soins médicaux et des programmes éducatifs. Chaque don que vous faites contribue directement à améliorer les conditions de vie des personnes dans le besoin.
        </Text>
        <Image
          style={styles.image}
          source="./assets/human.png"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Témoignages</Text>
        <Swiper style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide}>
            <Text style={styles.subTitle}>
              "Grâce à vos dons, nous avons pu manger un repas complet chaque jour."
            </Text>
            <Text style={styles.subTitleLegend}>
              Amina, bénéficiaire.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.subTitle}>
              "L'accès à l'eau potable a changé notre vie. Merci!"
            </Text>
            <Text style={styles.subTitleLegend}>
              Youssef, bénéficiaire.
            </Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.subTitle}>
              "Votre soutien nous donne de l'espoir pour un avenir meilleur."
            </Text>
            <Text style={styles.subTitleLegend}>
              Leila, bénéficiaire.
            </Text>
          </View>
        </Swiper>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos Partenaires</Text>
        <Text style={styles.text}>
          Nous collaborons avec plusieurs organisations internationales pour maximiser notre impact. Nos partenaires incluent UNICEF, Oxfam, et Médecins Sans Frontières.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Faire un Don</Text>
        <Text style={styles.text}>
          Votre soutien est crucial. En faisant un don, vous nous aidez à continuer notre mission et à apporter de l'espoir et des ressources vitales à ceux qui en ont le plus besoin. Cliquez ci-dessous pour faire un don en ligne de manière sécurisée.
        </Text>
        <A href="/faireundon" style={styles.buttonText}>Faire un Don</A>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rejoignez Notre Communauté</Text>
        <Text style={styles.text}>
          Rejoignez-nous sur les réseaux sociaux et restez informé de nos projets et de nos événements. Ensemble, nous pouvons faire une différence.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mentions Légales</Text>
        <Text style={styles.text}>
          Pour plus d'informations, veuillez consulter nos mentions légales sur la page dédiée.
        </Text>
        <A href="/mentionlegal" style={styles.buttonText}>Mentions légales</A>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "white", 
  },
  title: {
    marginVertical: 40,
  },
  titleFont: {
    fontSize: 56,
    textAlign: "center",
    fontWeight: "bold",
    color: "red",
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 10,
    color: "green",
  },
  text: {
    fontSize: 32,
    lineHeight: 48,
    color: "black",
  },
  subTitle: {
    fontSize: 28,
    lineHeight: 48,
    color: "white"
  },
  subTitleLegend: {
    color: "red",
  },
  image: {
    width: "100%",
    height: 400,
    marginTop: 20,
  },
  logo: {
    width: "30%",
    height: 500,
    marginTop: 20,
    alignSelf: "center"
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 15,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold", 
    backgroundColor: "red",
    color: "white",
    display: "block",
    padding: 7.5,
    marginTop: 10,
    borderRadius: 7.5,
    width: "fit-content"
  },
});
