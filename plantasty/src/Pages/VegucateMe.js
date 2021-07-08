// three components for one page?:
import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer';
import VegucateMeCard from '../Components/VegucateMeCard';
import styles from '../Components/VegucateMeCard/vegucateme.module.css';
import Mythbusters from '../Components/Mythbusters';
import b12 from '../img/b12.jpeg';
import omega from '../img/omega.png';
import protein from '../img/protein.png';

function VegucateMe() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Mythbusters />
      </div>
      <div className={styles.cardContainer}>
        <VegucateMeCard
          title="Vitamin B12"
          summary="This nutrient is needed to help speed up reactions in your body. Deficiency can cause anaemia and nervous system damage."
          listItem1="Vitamin B12 is added to some alternatives to milk products, vegan spreads, nutritional yeast flakes, yeast extracts and breakfast cereals"
          listItem2="Eat these foods at least twice a day"
          listItem3="Aim for a daily intake of at least 3mcg (micrograms)"
          src={b12}
        />
        <VegucateMeCard
          title="Protein"
          summary="A common myth is that it’s difficult to get protein from plant foods. In reality, they can provide all the essential protein building blocks that we call amino acids."
          listItem1="It’s just about combining protein such as beans, pulses, seeds and nuts"
          listItem2="peanut butter, cashew nuts and pumpkin seeds"
          listItem3="broccoli, quinoa"
          src={protein}
        />
        <VegucateMeCard
          title="Omega 3"
          summary="Include good sources of ALA in your daily diet, such as chia seeds, 
          ground linseed, hemp seeds and walnuts, and use vegetable (rapeseed) oil as your main cooking oil. To meet the ALA recommendations of the Food and Agriculture Organization of the United Nations (FAO) and the European Food Safety Authority (EFSA), you would need to eat about a tablespoon of chia seeds or ground linseed, two tablespoons of hemp seeds or six walnut halves daily."
          listItem1="Use vegetable (rapeseed) oil instead of oils containing a lot of LA, such as sunflower, corn or sesame oils"
          listItem2="Make sure that your daily diet includes good sources of ALA, such as chia seeds, ground linseed, hemp seeds and walnuts"
          listItem3="Limit servings of pumpkin seeds or sunflower seeds to around 30g (¼ cup)"
          src={omega}
        />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default VegucateMe;
