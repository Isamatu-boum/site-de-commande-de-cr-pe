let Cart = [];
let total = 0;

function addToCart(item, price) {
    Cart.push({ item, price });
    total += price;
updateCart();
}
function updateCart() {
    const cartListe = document.getElementById('cart');
    const totalSpam = document.getElementById('total');
    cartListe.innerHTML = '';
    Cart.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.item} - ${entry.price} FCFA`;
        cartListe.appendChild(li);
    });
    totalSpam.textContent = Total;

    }
function commander() {
   if (Cart.length === 0) {
        alert('Votre panier est vide. Veuillez ajouter des articles avant de commander.');
        return;
    }
    const nom = prompt('entrez votre votre nom :');
    const prenom = prompt('entrez votre prénom :');
    const adresse = prompt('entrez votre adresse de livraison :');
    
    if (nom && prenom && adresse) {
        // construire le message de confirmation
        let message = `Nouvelle commande crepe Délice*%0A`;
        message += `Nom: ${nom} %0A`;
        message += `Prénom: ${prenom} %0A`;
        message += `Adresse: ${adresse} %0A%0A`;
        message += `panier: %0A`;
        Cart.forEach(entry => {
            message += `- ${entry.item} : ${entry.price} FCFA %0A`;
        });
        message += `%0A Total: ${total} FCFA %0A`;
        //lien whatsapp avec numéro
        const numérowhatsapp = '2250716336295';// a remplacer par ton numéro 
        const whatsappurl = `https://wa.me/$ (numeroWhatsApp)?text=$(message)`;
    // rediriger vers whatsapp
    Cart = [];
    total = 0;
    updateCart();
} else {
    alert('Commande annulée. Veuillez remplir les informations.');
  }   
}