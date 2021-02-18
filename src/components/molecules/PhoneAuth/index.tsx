import React, { useState } from 'react';
import { Input } from '@/components/atoms';
import { app, auth } from '@/utils/firebaseInit';

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const PhoneAuth = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [sent, isSent] = useState(false);

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new app.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (
          response // eslint-disable-line no-unused-vars
        ) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          //   onSignInSubmit();
        },
      }
    );
  };

  const handleAuthButton = () => {
    const code = authCode;
    const { confirmationResult } = window;
    confirmationResult
      .confirm(code)
      .then(result => {
        const verified = result.user;
        const user = verified;
        console.log('Done', user);
      })
      .catch(error => {
        console.log('인증', error);
      });
  };

  const handleAuth = () => {
    setUpRecaptcha();
    try {
      const inputNumber = '+821041821542';
      const appVerifier = window.recaptchaVerifier;
      auth
        .signInWithPhoneNumber(inputNumber, appVerifier)
        .then(confirmationResult => {
          window.confirmationResult = confirmationResult;
          isSent(true);
        })
        .catch(error => {
          /// 여기서 rechapcha rendered error 발생
          console.log('함수안', error);
        });
    } catch (e) {
      console.log('함수밖', e);
    }
  };

  const handleButton = event => {
    event.preventDefault();
    handleAuth();
  };

  return (
    <form onSubmit={handleButton}>
      <Input
        type="text"
        placeholder="이름"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        requierd
      />
      <Input
        type="text"
        placeholder="휴대폰번호"
        value={phoneNumber}
        onChange={({ target: { value } }) => setPhoneNumber(value)}
        requierd
      />
      <button type="submit">인증요청</button>
      {sent === true ? (
        <>
          <Input
            type="text"
            placeholder="인증번호"
            value={authCode}
            onChange={({ target: { value } }) => setAuthCode(value)}
            requierd
          />
          <button type="button" onClick={handleAuthButton}>
            인증하기
          </button>
        </>
      ) : null}
      <div id="recaptcha-container" />
    </form>
  );
};

export default PhoneAuth;
