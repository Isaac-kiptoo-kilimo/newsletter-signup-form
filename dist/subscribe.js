"use strict";
const btnSubmit = document.querySelector('.btn-submit');
const signForm = document.querySelector('.sign-form');
const emailInput = document.getElementById('email');
const mainCard = document.querySelector('.main-card');
const messageCard = document.querySelector('.message-card');
const btnMessage = document.querySelector('.btn-dismiss');
const emailMessage = document.querySelector('.empty-email-message');
const errorEmail = document.querySelector('.invalid-email-message');
if (btnSubmit && signForm && emailInput && mainCard && messageCard && btnMessage && emailMessage && errorEmail) {
    signForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailSpan = document.getElementById('email-span');
        const newEmailValue = emailInput.value.trim();
        // Reset styles
        emailInput.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        emailInput.style.border = '1px solid rgba(255, 0, 0, 0.5)';
        emailInput.style.color = 'red';
        errorEmail.textContent = '';
        errorEmail.style.color = 'rgba(255, 0, 0, 1)';
        emailMessage.textContent = '';
        emailMessage.style.color = 'rgba(255, 0, 0, 1)';
        if (newEmailValue) {
            const regexMatch = /^[A-Za-z][A-Za-z0-9]*@gmail\.com$/.test(newEmailValue);
            if (regexMatch) {
                if (emailSpan) {
                    emailSpan.textContent = newEmailValue;
                }
                mainCard.style.display = 'none';
                if (messageCard) {
                    messageCard.style.display = 'block';
                }
                emailInput.value = '';
            }
            else {
                e.preventDefault();
                errorEmail.textContent = 'Valid email is required.';
            }
        }
        else {
            e.preventDefault();
            emailMessage.textContent = 'You must type in an email';
        }
    });
    emailInput.addEventListener('focus', () => {
        emailInput.style.backgroundColor = 'white';
        emailInput.style.border = '1px solid black';
        emailInput.style.color = 'black';
        errorEmail.textContent = '';
        emailMessage.textContent = '';
    });
    if (btnMessage && messageCard) {
        btnMessage.addEventListener('click', (e) => {
            e.preventDefault();
            if (messageCard) {
                messageCard.style.display = 'none';
            }
            if (mainCard) {
                mainCard.style.display = 'flex';
            }
            emailInput.value = '';
            emailInput.style.backgroundColor = 'white';
            emailInput.style.border = '1px solid black';
            emailInput.style.color = 'black';
            errorEmail.textContent = '';
            emailMessage.textContent = '';
        });
    }
}
