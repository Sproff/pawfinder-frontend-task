import React, { useState } from "react";
import Styled from "styled-components";

import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";

import Eclipse from "../components/assets/images/eclipse.png";
import Lady from "../components/assets/images/lady.png";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((toggle) => !toggle);
  };

  return (
    <Container className="box_container">
      <div className="box_container__group-one">
        <header className="box_container__group-one--header">
          <h2>Travling!</h2>
        </header>

        <div className="box_container__group-one--form">
          <div className="box_container__group-one--form-title">
            <h2 className="">Masuk</h2>
            <h3 className="">Daftar</h3>
          </div>

          <form>
            <div className="box_container__group-one--form-inputs">
              <input type="text" placeholder="Nomor Ponsel atau Email" />
              <div className="show">
                <input
                  className="spacer"
                  type={showPassword ? "text" : "password"}
                  placeholder="Kata Sandi"
                />
                <i onClick={togglePassword} className="">
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </i>
              </div>

              <br />
              <button>MASUK</button>
            </div>

            <div className="box_container__group-one--form-ask">
              <p>
                Lupa kata sandi?
                <a href="##"> Klik disini</a>
              </p>
            </div>

            <div className="box_container__group-one--form-btns">
              <p>atau masuk dengan</p>

              <button>
                <i className="social-icon">
                  <FcGoogle />
                </i>
                Google
              </button>
              <button className="spacer">
                <i className="social-icon">
                  <CgFacebook />
                </i>
                Facebook
              </button>
            </div>
          </form>
        </div>

        <footer className="box_container__group-one--footer">
          <p>© 2021 Travling. All Rights Reserved</p>
        </footer>
      </div>

      <div className="box_container__group-two">
        <div className="box_container__group-two--bg-eclipse">
          <img src={Eclipse} alt="" />
        </div>

        <div className="box_container__group-two--glass">
          <div className="glass-sub-box">
            <h3>Start your journey by one click, explore beautiful world!</h3>
            <img src={Lady} alt="" />

            <div className="box_container__group-two--control">
              <div className="control-one"></div>
              <div className="control-two"></div>
              <div className="control-three"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = Styled.div`
  background-color: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 1000px;
  margin: 3rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;

  }

  .box_container__group-one {
    padding: 3rem 0 3rem 3rem;
    width: 50%;

    @media (max-width: 768px) {
      padding: 5rem 10rem;
      width: 100%;
    }

    @media (max-width: 576px) {
      padding: 3rem;
      width: 100%;
    }

    .box_container__group-one--header h2 {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
      color: #42A7C3;
    }

    .box_container__group-one--form {
      padding: 3rem 10rem 3rem 4rem;
      
      @media (max-width: 768px) {
        padding: 0;
      }

      .box_container__group-one--form-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-top: 3rem;
        padding-bottom: 1.3rem;

        h2 {
          font-weight: 700;
          font-size: 1.2rem;
          color: #515151;
        }

        h3 {
          font-weight: 400;
          font-size: .75rem;
          color: #0098EA;
        }
      }

      form {
        .box_container__group-one--form-inputs {
          input {
          background-color: #fff;
          border: 1px solid #D0D0D0;
          border-radius: 4px;
          padding: .5rem .7rem;
          width: 100%;
        }

        input[type=text], input[type=password] {
          color: #8A8A8A;
        }

        input:focus {
          outline: none;
        }

        input::placeholder {
          color: #8A8A8A;
          font-size: .55rem;
          font-weight: 300;
          letter-spacing: 0.0125rem
        }

        .spacer {
          margin-top: 1rem;
        }

        button {
          background-color: #D0D0D0;
          border-radius: 8px;
          padding: .6rem .7rem;
          margin-top: .5rem;
          width: 100%;
          border: none;
          cursor: pointer;
          color: #FFFFFF;
          font-size: .7rem;
        }

        .show {
          position: relative;
          
          i {
              position: absolute;
              top: 25px;
              right: 10px;
              cursor: pointer;
              color: #D0D0D0;
              font-size: .8rem;
              font-weight: 400;
          }
        }
      }

      .box_container__group-one--form-ask {
        font-weight: 600;
        padding-top: 1.5rem;
        font-size: .58rem;

          p {
          color: #515151;
          letter-spacing: 0.0125rem
          }

          a {
            color: #0098EA;
            text-decoration: none;
          }
        }

        .box_container__group-one--form-btns {
          p {
            color: #D0D0D0;
            font-weight: 400;
            font-size: .55rem;
            text-align: center;
            position: relative;
            padding: 1.5rem 0;
          }

          p:before {
            content: "";
            display: block;
            width: 70px;
            height: 1px;
            background: #D0D0D0;
            left: 0px;
            top: 50%;
            position: absolute;

            @media (max-width: 768px) {
              width: 120px;
            }

            @media (max-width: 375px) {
              width: 31%;
            }
          }

          p:after {
            content: "";
            display: block;
            width: 70px;
            height: 1px;
            background: #D0D0D0;
            right: 0px;
            top: 50%;
            position: absolute;

            @media (max-width: 768px) {
              width: 120px;
            }

            @media (max-width: 375px) {
              width: 31%;
            }
          }

          button {
            background-color: #fff;
            color: #505050;
            border: 1px solid #D0D0D0;
            border-radius: 4px;
            padding: .5rem .7rem;
            width: 100%;
            cursor: pointer;
            font-weight: 700;
            display: flex;
            justify-content: center;
            align-items: center;

            .social-icon {
              font-size: 1rem;
              margin-right: .5rem;
              color: #3A589B;
            }
          }

          .spacer {
            margin: 1rem 0;
          }

        }
      }
    }

    .box_container__group-one--footer {
      font-weight: 400;
      font-size: .8rem;
      color: #8A8A8A;
      padding-top: 3rem;
    }
  }

  .box_container__group-two {
    width: 50%;
    height: 680px;
    background: #42A7C3;
    border: 1px solid #42A7C3;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    right: 20px;

    @media (max-width: 768px) {
      width: 90%;
      right: 0px;
    }

  @media (max-width: 576px) {
    height: 400px;
  }

    .box_container__group-two--bg-eclipse {
      width: 100%;

      img {
        height: 505px;
        position: absolute;
        bottom: 0;
      }
    }

    .box_container__group-two--glass {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      .glass-sub-box {
        width: 420px;
        height: 570px;
        background-color: rgba(183, 233, 246, 0.25);
        border-radius: 16px;
        border: 0.01px solid rgba(255, 255, 255, 0.61);
        backdrop-filter: blur(8px);
        background-clip: padding-box;
        position: absolute;
        right: 30px;

        @media (max-width: 576px) {
          height: 90%;
          width: 80%;
        }

        h3 {
          color: #fff;
          font-size: 1.9rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          line-height: 1.5;
          padding: 2rem 2.3rem 2rem 2rem;

          @media (max-width: 576px) {
            font-size: 1.2rem;
          }
        }

        img {
          width: 340px;
          position: absolute;
          bottom: 0;
          right: -32px;

          @media (max-width: 768px) {
            width: 200px;
          }
        }
      }

      .box_container__group-two--control {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 15%;
          position: absolute;
          bottom: 30px;
          left: 15px;

          @media (max-width: 768px) {
            width: 24%;
          }

          .control-one {
            background-color: #fff;
            padding: 0.3rem 1rem;
            border-radius: 16px;
            cursor: pointer;
          }

          .control-two, .control-three {
            border-radius: 50%;
            background-color: #F7F7F7;
            opacity: 0.6;
            cursor: pointer;
            padding: 0.3rem;
          }
        }
    }
  }
`;
