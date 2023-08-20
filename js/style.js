
let total = 0;
function clickOnCard(items) {
      const getElementText = items.childNodes[3].childNodes[3].innerText;
      const li = document.createElement('li');
      li.innerText = getElementText;

      const addCartTitle = document.getElementById('add-cart-title');
      addCartTitle.appendChild(li);
      li.classList.add('list-decimal');
      li.classList.add('font-medium');
      li.classList.add('text-xl');

      const itemPrice = items.childNodes[3].childNodes[5].innerText.split(' ')[0];
      const cartTotal = document.getElementById('cart-total');
      total = parseFloat(total) + parseFloat(itemPrice);
      const totalTwoDecimal = total.toFixed(2);
      cartTotal.innerText = totalTwoDecimal;

      if (totalTwoDecimal > 0) {
            const purchaseBtn = document.getElementById('purchase-btn');
            purchaseBtn.removeAttribute('disabled')
      }
      if (totalTwoDecimal > 200) {
            const applyBtn = document.getElementById('apply-btn');
            applyBtn.removeAttribute('disabled');
      }
}

// Discount part

function clickToGetDiscount() {
      const inputCoupon = document.getElementById('input-coupon');
      const inputCouponValue = inputCoupon.value;
      inputCoupon.value = '';

      if (inputCouponValue === 'SELL200') {
            const discountCardTotal = document.getElementById('cart-total').innerText;
            const cardTotalNumber = parseFloat(discountCardTotal);
            const cardTotalTwoDecimalNumber = cardTotalNumber.toFixed(2);

            const giveDiscount = 20 / 100;
            const discountAmount = cardTotalTwoDecimalNumber * giveDiscount;
            const discountAmountTwoDecimal = discountAmount.toFixed(2);

            const discountId = document.getElementById('discount-id');
            discountId.innerText = discountAmountTwoDecimal;

            const newPrice = cardTotalTwoDecimalNumber - discountAmountTwoDecimal;
            const newPriceTwoDecimal = newPrice.toFixed(2);
            const addNewPrice = document.getElementById('new-total');
            addNewPrice.innerText = newPriceTwoDecimal;
      }
      else{
            return;
      }
}

// Jump from Modal to my Home page

function toHomePage() {
      window.location.href = 'http://127.0.0.1:5500/index.html';
}