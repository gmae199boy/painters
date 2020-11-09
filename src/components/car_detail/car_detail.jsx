import React from "react";
import styles from "./car_detail.module.css";
import ColorData from "../color_data/color_data";

const CarDetail = ({car}) => {
  return(
    <div className={styles.container}>
      <div className={styles.parts}>
        <button type="submit" className={styles.part} >{car.parts.A}</button>
        <button type="submit" className={styles.part} >{car.parts.B}</button>
        <button type="submit" className={styles.part} >{car.parts.C}</button>
        <button type="submit" className={styles.part} >{car.parts.D}</button>
        <button type="submit" className={styles.part} >{car.parts.E}</button>
        <button type="submit" className={styles.part} >{car.parts.F}</button>
        <button type="submit" className={styles.part} >{car.parts.G}</button>
        <button type="submit" className={styles.part} >{car.parts.H}</button>
        <button type="submit" className={styles.part} >{car.parts.I}</button>
        <button type="submit" className={styles.part} >{car.parts.J}</button>
        <button type="submit" className={styles.part} >{car.parts.K}</button>
        <button type="submit" className={styles.part} >{car.parts.L}</button>
        <img className={styles.image} src="/images/car.png" alt="car"/>
      </div>
      <div className={styles.metadata}>
        <h2 className={styles.title}>차량 번호 : {car.Number}</h2>
        <h2 className={styles.brand}>제조사 : {car.Brand}</h2>
        <h2 className={styles.name}>차종 : {car.Name}</h2>
        <h2 className={styles.name}>컬러 코드 : {car.Color}</h2>
        <hr></hr>
        <ColorData car={car}/>
      </div>
    </div>
  )
}

export default CarDetail;