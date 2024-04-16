import { Button, Typography } from "@mui/material";
import VideoBackground from "../video/video";

const DigitalCollectibles = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          paddingBottom: "30vh",
        }}
      >
        <VideoBackground videoSource="digital.mp4">
          <div
            style={{
              position: "absolute",
              background:
                "linear-gradient(180deg, #000 4.33%, rgba(0, 0, 0, 0.00) 99.9%)",
              top: 0,
              height: "20%",
              width: "100%",
              left: 0,
            }}
          />
          <div
            style={{
              flexShrink: 0,
              borderRadius: "18.75rem",
              backgroundColor: "#DC05FE",
              width: "18.75rem",
              height: "18.75rem",
              filter: "blur(200px)",
              fill: "#DC05FE",
              position: "absolute",
              right: "20%",
            }}
          />
          <div
            style={{
              flexShrink: 0,
              borderRadius: "18.75rem",
              backgroundColor: "#05FEEF",
              width: "18.75rem",
              height: "18.75rem",
              filter: "blur(200px)",
              fill: "#05FEEF",
              position: "absolute",
              right: "50%",
              bottom: 0,
            }}
          />
          <div
            style={{
              marginLeft: "7rem",
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-start",

              gap: "1.5rem",
            }}
          >
            <Typography
              sx={{
                position: "relative",
                marginTop: "20vh",
                fontSize: "5.25rem",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "700",
                color: "#FFF",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Digital Collectibles belong to Virtual Worlds
            </Typography>

            <Typography
              sx={{
                position: "relative",
                fontSize: "25px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "500",
                color: "#FFF",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Explore our groundbreaking virtual museum, where NFT art meets the
              digital realm in a revolutionary way. Immerse yourself in a world
              where art transcends physical boundaries, and creativity knows no
              limits.
            </Typography>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexShrink: 0,
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "26rem",
                  height: "15rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="81"
                  viewBox="0 0 80 81"
                  fill="none"
                >
                  <path
                    d="M69.2495 54.6569C71.3983 50.2477 72.51 45.4055 72.4995 40.5006C72.4898 33.3418 70.1212 26.3856 65.7602 20.7084C61.3992 15.0312 55.2889 10.9493 48.3745 9.09435H48.2183C43.1483 7.75953 37.8303 7.6735 32.7198 8.84364C27.6093 10.0138 22.8586 12.4052 18.8745 15.8131L18.4683 16.1881C13.5213 20.5541 10.0219 26.3236 8.4361 32.7283C6.85031 39.1329 7.2534 45.8687 9.59169 52.0385C11.93 58.2083 16.0925 63.5193 21.5248 67.2642C26.9571 71.0091 33.4015 73.01 39.9995 73.0006H40.7495C46.6507 72.8548 52.4016 71.1091 57.388 67.9499C62.3745 64.7907 66.4094 60.3366 69.062 55.0631L69.2495 54.6569ZM67.4995 40.5006C67.4938 43.7746 66.912 47.022 65.7808 50.0943L51.2808 41.1881C50.6802 40.8171 50.0103 40.5725 49.312 40.4694L42.187 39.5319C41.2718 39.4135 40.3417 39.5492 39.4984 39.9239C38.6551 40.2987 37.9312 40.8982 37.4058 41.6569H34.7183L33.5308 39.1881C33.2038 38.5023 32.7239 37.9006 32.128 37.4292C31.532 36.9579 30.836 36.6295 30.0933 36.4694L28.0308 36.0319L29.4683 32.6569H36.1558C36.9975 32.6531 37.8248 32.4382 38.562 32.0319L42.3745 29.9069C42.7109 29.7245 43.0255 29.5043 43.312 29.2506L51.7183 21.6256C52.45 20.984 52.9744 20.1393 53.2248 19.1989C53.4752 18.2585 53.4403 17.2649 53.1245 16.3444C57.4718 18.7055 61.1017 22.1957 63.6317 26.447C66.1616 30.6984 67.4978 35.5534 67.4995 40.5006ZM45.9995 13.6569L48.3745 17.9381L39.9683 25.5319L36.1558 27.6569H29.4683C28.4855 27.6558 27.5246 27.9462 26.7069 28.4913C25.8892 29.0365 25.2515 29.8118 24.8745 30.7194L23.2183 34.5944L19.812 25.4694L22.3433 19.4381C25.5777 16.7227 29.3941 14.7888 33.4966 13.7862C37.599 12.7836 41.8772 12.7394 45.9995 13.6569ZM12.4995 40.5006C12.4924 36.1884 13.5099 31.9362 15.4683 28.0944L18.7183 36.8131C19.0155 37.594 19.5025 38.2887 20.1354 38.8342C20.7683 39.3798 21.527 39.7592 22.3433 39.9381L24.062 40.3131H24.0933L29.0308 41.3756L30.2183 43.8444C30.6375 44.6814 31.2792 45.3867 32.0731 45.8829C32.8669 46.379 33.7822 46.6468 34.7183 46.6569H35.0933L32.687 52.0318C32.2804 52.9235 32.1465 53.9154 32.3022 54.8829C32.4579 55.8504 32.8962 56.7503 33.562 57.4694L39.437 63.8443L38.6558 67.9693C31.6057 67.6168 24.9604 64.5698 20.0927 59.4578C15.225 54.3458 12.5067 47.5594 12.4995 40.5006ZM43.7808 67.7506L44.3433 64.7818C44.4947 64.013 44.4633 63.2192 44.2516 62.4647C44.0399 61.7102 43.6538 61.016 43.1245 60.4381L37.2495 54.0943L41.2183 45.1256L41.5308 44.4694L48.6558 45.4381L63.5933 54.6256C61.474 58.1483 58.596 61.1543 55.1687 63.4247C51.7414 65.6952 47.8511 67.173 43.7808 67.7506Z"
                    fill="#BB99FF"
                  />
                </svg>
                <Typography
                  sx={{
                    position: "relative",
                    fontSize: "1.5rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "500",
                    color: "#FFF",
                    fontStyle: "normal",
                    lineHeight: "140%",
                  }}
                >
                  Connect with a Global Community
                </Typography>
                <Typography
                  sx={{
                    position: "relative",
                    fontSize: "1rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "400",
                    color: "#FFF",
                    fontStyle: "normal",
                    lineHeight: "140%",
                    width: "24rem",
                  }}
                >
                  Join a vibrant community of artists, collectors, and
                  enthusiasts from around the world who share a passion for
                  pushing the boundaries of artistic expression in the
                  metaverse.
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "2rem",
                  width: "26rem",
                  height: "15rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="81"
                  viewBox="0 0 80 81"
                  fill="none"
                >
                  <path
                    d="M72.5 20.5H65V18C65 16.6739 64.4732 15.4021 63.5355 14.4645C62.5979 13.5268 61.3261 13 60 13H20C18.6739 13 17.4021 13.5268 16.4645 14.4645C15.5268 15.4021 15 16.6739 15 18V20.5H7.46875C6.14267 20.5 4.8709 21.0268 3.93322 21.9645C2.99553 22.9021 2.46875 24.1739 2.46875 25.5V30.5C2.46875 33.8152 3.78571 36.9946 6.12992 39.3388C8.47412 41.683 11.6535 43 14.9688 43H16.2188C19.25 52.3438 27.5312 59.3438 37.5 60.375V68H30C29.337 68 28.7011 68.2634 28.2322 68.7322C27.7634 69.2011 27.5 69.837 27.5 70.5C27.5 71.163 27.7634 71.7989 28.2322 72.2678C28.7011 72.7366 29.337 73 30 73H50C50.663 73 51.2989 72.7366 51.7678 72.2678C52.2366 71.7989 52.5 71.163 52.5 70.5C52.5 69.837 52.2366 69.2011 51.7678 68.7322C51.2989 68.2634 50.663 68 50 68H42.5V60.375C47.3713 59.8966 51.9937 57.9935 55.7898 54.9033C59.5858 51.8132 62.3871 47.673 63.8438 43H65C68.3152 43 71.4946 41.683 73.8388 39.3388C76.183 36.9946 77.5 33.8152 77.5 30.5V25.5C77.5 24.1739 76.9732 22.9021 76.0355 21.9645C75.0979 21.0268 73.8261 20.5 72.5 20.5ZM14.9688 38C12.9796 38 11.072 37.2098 9.66545 35.8033C8.25893 34.3968 7.46875 32.4891 7.46875 30.5V25.5H15V35.2188C15.0045 36.1479 15.0566 37.0762 15.1562 38H14.9688ZM54.0938 49.6875C52.2427 51.5363 50.0449 53.0014 47.6264 53.9988C45.2078 54.9963 42.6161 55.5064 40 55.5H39.8438C28.9062 55.4062 20 46.3125 20 35.2188V18H60V35.5C60.01 38.139 59.4927 40.7534 58.4785 43.1897C57.4642 45.6261 55.9735 47.8352 54.0938 49.6875ZM72.5 30.5C72.4918 32.4866 71.699 34.3895 70.2942 35.7942C68.8895 37.199 66.9866 37.9918 65 38H64.875C64.9641 37.1697 65.0059 36.335 65 35.5V25.5H72.5V30.5Z"
                    fill="#BB99FF"
                  />
                </svg>
                <Typography
                  sx={{
                    position: "relative",
                    fontSize: "1.5rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "500",
                    color: "#FFF",
                    fontStyle: "normal",
                    lineHeight: "140%",
                  }}
                >
                  Connect with a Global Community
                </Typography>
                <Typography
                  sx={{
                    position: "relative",
                    fontSize: "1rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "400",
                    color: "#FFF",
                    fontStyle: "normal",
                    lineHeight: "140%",
                    width: "24rem",
                  }}
                >
                  From national herritage to cutting-edge digital installations,
                  our metaverse museum offers a diverse array of exhibits
                  curated to inspire and captivate audiences of all backgrounds.
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "26rem",
                  height: "15rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <path
                    d="M57.4999 36.25H47.4999C46.8369 36.25 46.201 35.9866 45.7321 35.5178C45.2633 35.0489 44.9999 34.413 44.9999 33.75C44.9999 33.087 45.2633 32.4511 45.7321 31.9822C46.201 31.5134 46.8369 31.25 47.4999 31.25H57.4999C58.163 31.25 58.7988 31.5134 59.2677 31.9822C59.7365 32.4511 59.9999 33.087 59.9999 33.75C59.9999 34.413 59.7365 35.0489 59.2677 35.5178C58.7988 35.9866 58.163 36.25 57.4999 36.25ZM32.4999 31.25H29.9999V28.75C29.9999 28.087 29.7365 27.4511 29.2677 26.9822C28.7988 26.5134 28.163 26.25 27.4999 26.25C26.8369 26.25 26.201 26.5134 25.7321 26.9822C25.2633 27.4511 24.9999 28.087 24.9999 28.75V31.25H22.4999C21.8369 31.25 21.201 31.5134 20.7321 31.9822C20.2633 32.4511 19.9999 33.087 19.9999 33.75C19.9999 34.413 20.2633 35.0489 20.7321 35.5178C21.201 35.9866 21.8369 36.25 22.4999 36.25H24.9999V38.75C24.9999 39.413 25.2633 40.0489 25.7321 40.5178C26.201 40.9866 26.8369 41.25 27.4999 41.25C28.163 41.25 28.7988 40.9866 29.2677 40.5178C29.7365 40.0489 29.9999 39.413 29.9999 38.75V36.25H32.4999C33.163 36.25 33.7988 35.9866 34.2677 35.5178C34.7365 35.0489 34.9999 34.413 34.9999 33.75C34.9999 33.087 34.7365 32.4511 34.2677 31.9822C33.7988 31.5134 33.163 31.25 32.4999 31.25ZM68.2187 69.8125C67.5698 69.9368 66.9106 69.9996 66.2499 70C63.2743 69.999 60.4202 68.8192 58.3124 66.7188L58.1562 66.5625L45.4687 52.4375L34.5624 52.5L21.8437 66.5625L21.7187 66.7188C19.5956 68.8153 16.7337 69.9937 13.7499 70C13.0995 70.0011 12.4506 69.9383 11.8124 69.8125C10.3558 69.5597 8.96354 69.0216 7.71561 68.229C6.46769 67.4364 5.38873 66.4049 4.54075 65.1939C3.69277 63.983 3.09249 62.6163 2.77443 61.1726C2.45637 59.7288 2.4268 58.2365 2.68741 56.7812L7.78116 30.5625V30.5C8.5397 26.1544 10.8086 22.2163 14.1876 19.3804C17.5666 16.5446 21.8386 14.9932 26.2499 15L53.7499 14.9062C58.1407 14.909 62.3913 16.4527 65.7606 19.2681C69.13 22.0835 71.4044 25.9921 72.1874 30.3125C72.2187 30.3438 72.2187 30.3437 72.2187 30.375L77.3124 56.75H77.3437C77.8619 59.6918 77.1923 62.719 75.4817 65.1677C73.7711 67.6165 71.1591 69.2869 68.2187 69.8125ZM53.7499 47.4062C57.3966 47.4062 60.894 45.9576 63.4726 43.379C66.0513 40.8003 67.4999 37.303 67.4999 33.6562C67.4999 30.0095 66.0513 26.5122 63.4726 23.9335C60.894 21.3549 57.3966 19.9062 53.7499 19.9062L26.2499 20C23.0334 19.9915 19.9162 21.1134 17.4429 23.1697C14.9696 25.226 13.2975 28.086 12.7187 31.25C12.7235 31.304 12.7127 31.3583 12.6874 31.4062L7.59366 57.6875C7.36827 58.99 7.56166 60.3305 8.14604 61.5162C8.73041 62.7019 9.67568 63.6717 10.846 64.2864C12.0162 64.9011 13.3513 65.1288 14.6592 64.937C15.9671 64.7452 17.1804 64.1436 18.1249 63.2188L31.5937 48.3125C31.8312 48.0609 32.1168 47.8594 32.4334 47.7199C32.7501 47.5804 33.0914 47.5056 33.4374 47.5L53.7499 47.4062ZM72.4062 57.6875L69.6874 43.5625C68.0023 46.2704 65.6544 48.5037 62.8656 50.0513C60.0768 51.5988 56.9393 52.4093 53.7499 52.4062H52.1562L61.8749 63.2188C62.8194 64.1436 64.0328 64.7452 65.3407 64.937C66.6485 65.1288 67.9836 64.9011 69.1539 64.2864C70.3242 63.6717 71.2694 62.7019 71.8538 61.5162C72.4382 60.3305 72.6316 58.99 72.4062 57.6875Z"
                    fill="#BB99FF"
                  />
                </svg>
                <Typography
                  sx={{
                    position: "relative",
                    fontSize: "1.5rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "500",
                    color: "#FFF",
                    fontStyle: "normal",
                    lineHeight: "140%",
                  }}
                >
                  Unlock Exclusive NFT Artworks
                </Typography>
                <Typography
                  sx={{
                    position: "relative",
                    fontSize: "1rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "400",
                    color: "#FFF",
                    fontStyle: "normal",
                    lineHeight: "140%",
                    width: "24rem",
                  }}
                >
                  As the first institutional metaverse museum, we are proud to
                  be linked with the world's first institutional NFT
                  marketplace. Dive into a realm of exclusive digital art
                  collectibles that redefine ownership and authenticity.
                </Typography>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  position: "absolute",
                  background:
                    "linear-gradient(0deg, #000 4.33%, rgba(0, 0, 0, 0.00) 99.9%)",
                  bottom: 0,
                  height: "25%",
                  width: "100%",
                  left: 0,
                }}
              />
            </div>
          </div>
        </VideoBackground>
      </div>
    </>
  );
};

export default DigitalCollectibles;
