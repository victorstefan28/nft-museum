import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";
import MyForm from "../MyForm";
import { useFrame } from "../../context/FrameContext";

const Footer = () => {
  const { changeFrame } = useFrame();
  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          background: "#000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingLeft: "8rem",
          paddingRight: "6.50rem",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            columnGap: "20px",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              position: "relative",

              fontSize: "1.5625rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              color: "#F1F3F4",
              fontStyle: "normal",
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            contact us
          </Typography>
          <div>
            <div
              id="form"
              style={{ display: "inline-flex", alignItems: "flex-start" }}
            >
              <MyForm />
            </div>
          </div>
          <div style={{ bottom: 0, marginTop: "4.25rem" }}>
            <div
              style={{ display: "none", flexDirection: "row", gap: "1.25rem" }}
            >
              <div
                style={{
                  background: "#333",
                  display: "flex",
                  padding: "0.75rem",
                  borderRadius: "6.25rem",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.625rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M12.5 10C12.5 10.4945 12.3534 10.9778 12.0787 11.3889C11.804 11.8 11.4135 12.1205 10.9567 12.3097C10.4999 12.4989 9.99723 12.5484 9.51227 12.452C9.02732 12.3555 8.58186 12.1174 8.23223 11.7678C7.8826 11.4181 7.6445 10.9727 7.54804 10.4877C7.45157 10.0028 7.50108 9.50011 7.6903 9.04329C7.87952 8.58648 8.19995 8.19603 8.61107 7.92133C9.0222 7.64662 9.50555 7.5 10 7.5C10.6624 7.50206 11.2971 7.76611 11.7655 8.23451C12.2339 8.7029 12.4979 9.33759 12.5 10ZM17.8125 6.5625V13.4375C17.8125 14.5978 17.3516 15.7106 16.5311 16.5311C15.7106 17.3516 14.5978 17.8125 13.4375 17.8125H6.5625C5.40218 17.8125 4.28938 17.3516 3.46891 16.5311C2.64844 15.7106 2.1875 14.5978 2.1875 13.4375V6.5625C2.1875 5.40218 2.64844 4.28938 3.46891 3.46891C4.28938 2.64844 5.40218 2.1875 6.5625 2.1875H13.4375C14.5978 2.1875 15.7106 2.64844 16.5311 3.46891C17.3516 4.28938 17.8125 5.40218 17.8125 6.5625ZM13.75 10C13.75 9.25832 13.5301 8.5333 13.118 7.91661C12.706 7.29993 12.1203 6.81928 11.4351 6.53545C10.7498 6.25162 9.99584 6.17736 9.26841 6.32206C8.54098 6.46675 7.8728 6.8239 7.34835 7.34835C6.8239 7.8728 6.46675 8.54098 6.32206 9.26841C6.17736 9.99584 6.25162 10.7498 6.53545 11.4351C6.81928 12.1203 7.29993 12.706 7.91661 13.118C8.5333 13.5301 9.25832 13.75 10 13.75C10.9946 13.75 11.9484 13.3549 12.6517 12.6517C13.3549 11.9484 13.75 10.9946 13.75 10ZM15 5.9375C15 5.75208 14.945 5.57082 14.842 5.41665C14.739 5.26248 14.5926 5.14232 14.4213 5.07136C14.25 5.00041 14.0615 4.98184 13.8796 5.01801C13.6977 5.05419 13.5307 5.14348 13.3996 5.27459C13.2685 5.4057 13.1792 5.57275 13.143 5.7546C13.1068 5.93646 13.1254 6.12496 13.1964 6.29627C13.2673 6.46757 13.3875 6.61399 13.5417 6.717C13.6958 6.82002 13.8771 6.875 14.0625 6.875C14.3111 6.875 14.5496 6.77623 14.7254 6.60041C14.9012 6.4246 15 6.18614 15 5.9375Z"
                    fill="#BB99FF"
                  />
                </svg>
              </div>
              <div
                style={{
                  background: "#333",
                  display: "flex",
                  padding: "0.75rem",
                  borderRadius: "6.25rem",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.625rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.3047 5.45313C18.2329 5.1651 18.0923 4.89878 17.895 4.67699C17.6977 4.4552 17.4496 4.28456 17.1719 4.17969C14.5 3.14844 10.2344 3.15625 10 3.15625C9.76562 3.15625 5.5 3.14844 2.82812 4.17969C2.55042 4.28456 2.30229 4.4552 2.10499 4.67699C1.9077 4.89878 1.76712 5.1651 1.69531 5.45313C1.49219 6.22656 1.25 7.64844 1.25 10C1.25 12.3516 1.49219 13.7734 1.69531 14.5469C1.76712 14.8349 1.9077 15.1012 2.10499 15.323C2.30229 15.5448 2.55042 15.7154 2.82812 15.8203C5.39062 16.8125 9.40625 16.8438 9.94531 16.8438H10.0547C10.5938 16.8438 14.6094 16.8125 17.1719 15.8203C17.4496 15.7154 17.6977 15.5448 17.895 15.323C18.0923 15.1012 18.2329 14.8349 18.3047 14.5469C18.5078 13.7734 18.75 12.3516 18.75 10C18.75 7.64844 18.5078 6.22656 18.3047 5.45313ZM12.6719 10.2578L8.92188 12.7578C8.87214 12.7944 8.81174 12.8136 8.75 12.8125C8.69825 12.8106 8.64756 12.7972 8.60156 12.7734C8.55163 12.7475 8.50986 12.7082 8.4809 12.6599C8.45194 12.6116 8.43692 12.5563 8.4375 12.5V7.5C8.43692 7.44372 8.45194 7.38837 8.4809 7.34011C8.50986 7.29184 8.55163 7.25254 8.60156 7.22656C8.65138 7.19999 8.70748 7.1874 8.76388 7.19016C8.82028 7.19291 8.87488 7.21089 8.92188 7.24219L12.6719 9.74219C12.7154 9.76963 12.7514 9.80768 12.7762 9.85276C12.8011 9.89785 12.8142 9.9485 12.8142 10C12.8142 10.0515 12.8011 10.1022 12.7762 10.1472C12.7514 10.1923 12.7154 10.2304 12.6719 10.2578Z"
                    fill="#BB99FF"
                  />
                </svg>
              </div>
              <div
                style={{
                  background: "#333",
                  display: "flex",
                  padding: "0.75rem",
                  borderRadius: "6.25rem",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.625rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M19.196 6.07039L16.8366 8.42195C16.3679 13.8829 11.7585 18.1251 6.2507 18.1251C5.11788 18.1251 4.18038 17.9454 3.46945 17.5938C2.89913 17.3048 2.66476 17.0001 2.60226 16.9063C2.55055 16.8278 2.51723 16.7386 2.50478 16.6454C2.49233 16.5522 2.50107 16.4573 2.53036 16.368C2.55964 16.2786 2.60872 16.197 2.67392 16.1293C2.73912 16.0615 2.81878 16.0093 2.90695 15.9766C2.92257 15.9688 4.76632 15.2657 5.96163 13.9141C5.22034 13.3863 4.56878 12.7427 4.03195 12.0079C2.96163 10.5548 1.82882 8.03132 2.50851 4.2657C2.52988 4.15375 2.58108 4.04965 2.65671 3.96439C2.73234 3.87913 2.82959 3.81589 2.9382 3.78132C3.04714 3.74565 3.16381 3.74063 3.27542 3.76681C3.38703 3.79299 3.48929 3.84936 3.57101 3.92976C3.59445 3.96101 6.19601 6.52351 9.3757 7.35164V6.87507C9.37876 6.37954 9.47941 5.88945 9.67188 5.43281C9.86436 4.97617 10.1449 4.56191 10.4975 4.21369C10.85 3.86547 11.2677 3.59011 11.7267 3.40332C12.1857 3.21653 12.677 3.12199 13.1726 3.12507C13.823 3.13435 14.4598 3.31193 15.0212 3.64053C15.5825 3.96912 16.0492 4.43751 16.3757 5.00007H18.7507C18.8741 4.99969 18.9948 5.03583 19.0977 5.10396C19.2006 5.17208 19.281 5.26913 19.3288 5.38289C19.3738 5.49833 19.3853 5.62416 19.3618 5.74583C19.3383 5.86749 19.2808 5.98002 19.196 6.07039Z"
                    fill="#BB99FF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              position: "relative",

              fontSize: "1.25rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              color: "#F1F1F1",
              fontStyle: "normal",
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            Explore worlds
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
              onClick={() => changeFrame(0)}
            >
              The Globe
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
              onClick={() => changeFrame(1)}
            >
              Garden Museum
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
              onClick={() => changeFrame(2)}
            >
              Olympic Museum 1924 - 2004
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
              onClick={() => changeFrame(3)}
            >
              ICI Bucharest Museum
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              position: "relative",

              fontSize: "1.25rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              color: "#F1F1F1",
              fontStyle: "normal",
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            Explore worlds
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              <a
                style={{ color: "#CCC" }}
                href="https://nft.ici.ro/memories-of-future-self"
              >
                Memories of future self
              </a>
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              <a
                href="https://nft.ici.ro/our-ai-story"
                style={{ color: "#CCC" }}
              >
                Our AI Story
              </a>
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              <a
                href="https://nft.ici.ro/the-generational-circle"
                style={{ color: "#CCC" }}
              >
                Generational Circle
              </a>
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              <a href="https://nft.ici.ro/icons" style={{ color: "#CCC" }}>
                ICONS
              </a>
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              <a
                href="https://nft.ici.ro/past-present-future"
                style={{ color: "#CCC" }}
              >
                Past | Present | Future
              </a>
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              <a
                href="https://nft.ici.ro/a-world-in-a-stamp"
                style={{ color: "#CCC" }}
              >
                A world in stamp
              </a>
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            sx={{
              position: "relative",

              fontSize: "1.25rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              color: "#F1F1F1",
              fontStyle: "normal",
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            Resources
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              <a href="http://ici.ro/" style={{ color: "#CCC" }}>
                ICI.ro
              </a>
            </Typography>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              <a href="http://nft.ici.ro/" style={{ color: "#CCC" }}>
                nft.ici.ro
              </a>
            </Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "2rem",
          background: "#000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingLeft: "8rem",
          paddingRight: "6.50rem",
        }}
      >
        <div style={{ color: "#ccc" }}>
          <Typography
            sx={{
              position: "relative",

              fontSize: "1rem",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              color: "#CCC",
              fontStyle: "normal",
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            © ICI D|Services 2024 all rights reserved
          </Typography>
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "2rem",
          }}
        >
          <div style={{ color: "#ccc" }}>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
                display: "none",
              }}
            >
              Import
            </Typography>
          </div>
          <div style={{ color: "#ccc" }}>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
                display: "none",
              }}
            >
              Privacy Policy
            </Typography>
          </div>
          <div style={{ color: "#ccc" }}>
            <Typography
              sx={{
                position: "relative",

                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                color: "#CCC",
                fontStyle: "normal",
                lineHeight: "normal",
                textAlign: "center",
                display: "none",
              }}
            >
              Terms of Service
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
