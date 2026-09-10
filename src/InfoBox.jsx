import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ info }) {
  const IMG_URL =
    "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1641027131407-a559a5f73be0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENPTER8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1716913897161-d22267f4a4b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxyYWlufGVufDB8fDB8fHww";

  return (
    <div className="infobox">
      <div className="info-heading">
        <p className="info-eyebrow">CURRENT CONDITIONS</p>
        <p className="info-caption">Live weather details</p>
      </div>
      <div>
        <Card className="weather-card" sx={{ maxWidth: 390 }}>
          <CardMedia
            sx={{ height: 190 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent className="weather-card-content">
            <div className="city-row">
              <div>
                <Typography className="city-name" variant="h5" component="h3">
                  {info.city}
                </Typography>
                <p className="weather-description">{info.weather}</p>
              </div>
              <div className="condition-icon">
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <SunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </div>
            </div>
            <div className="temperature-row">
              <span className="temperature">{Math.round(info.temp)}&deg;</span>
              <span className="temperature-unit">C</span>
            </div>
            <div className="weather-stats">
              <div className="weather-stat">
                <span className="stat-label">Feels like</span>
                <strong>{info.feelsLike}&deg;C</strong>
              </div>
              <div className="weather-stat">
                <span className="stat-label">Humidity</span>
                <strong>{info.humidity}%</strong>
              </div>
              <div className="weather-stat">
                <span className="stat-label">High / low</span>
                <strong>
                  {info.tempMax}&deg; / {info.tempMin}&deg;
                </strong>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
