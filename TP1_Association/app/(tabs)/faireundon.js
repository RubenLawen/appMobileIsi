import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { PayPal } from 'react-native-paypal';

export default function DonationPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faire un Don</Text>
      {/* <PayPal 
        amount={20}
        orderID={"votre_order_id"} 
        productionClientID={"votre_client_id_paypal"} 
        sandboxClientID={"votre_client_id_paypal_sandbox"}
        success={(response) => {
          console.log("Paiement réussi:", response);
        }} 
        failed={(error) => {
          console.error("Erreur de paiement:", error);
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
