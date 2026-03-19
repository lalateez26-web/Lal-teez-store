function order(item) {
  const phone = "27XXXXXXXXX";
  const message = `Hello, I would like to order: ${item}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
}
