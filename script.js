const resPlaceOrderCloseIcon = document.getElementById('place-order-popup-close-icon');
const resPlaceOrderPopUp = document.getElementById('res-custom-place-order-popup');
const openResPlaceOrderModal = document.getElementById('place_order');

resPlaceOrderCloseIcon.addEventListener('click', () =>{
    resPlaceOrderPopUp.style.display = 'none';
});
openResPlaceOrderModal.addEventListener('click', () =>{
    resPlaceOrderPopUp.style.display = 'block';
})