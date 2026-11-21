const listProducts = document.querySelector(".list-products");
const totalElement = document.querySelector(".total");

// Calcule et affiche le total du panier
function updateTotal() {
  let total = 0;

  document.querySelectorAll(".list-products > .card-body").forEach((product) => {
    const price = parseFloat(product.querySelector(".unit-price").textContent);
    const quantity = parseInt(product.querySelector(".quantity").textContent);
    total += price * quantity;
  });

  totalElement.textContent = total + " $";
}

// Un seul écouteur de clic pour tout le panier (délégation d'événements)
listProducts.addEventListener("click", (event) => {
  const target = event.target;
  const product = target.closest(".list-products > .card-body");
  if (!product) return;

  const quantityElement = product.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);

  // Bouton "+"
  if (target.classList.contains("fa-plus-circle")) {
    quantityElement.textContent = quantity + 1;
    updateTotal();
  }

  // Bouton "-" (la quantité ne descend pas sous 0)
  else if (target.classList.contains("fa-minus-circle")) {
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
      updateTotal();
    }
  }

  // Bouton supprimer
  else if (target.classList.contains("fa-trash-alt")) {
    product.remove();
    updateTotal();
  }

  // Bouton cœur : active/désactive la couleur
  else if (target.classList.contains("fa-heart")) {
    target.classList.toggle("liked");
  }
});

// Affiche le total initial
updateTotal();