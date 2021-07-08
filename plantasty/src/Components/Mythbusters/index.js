import React from 'react';
import images from '../../img';

export default function Mythbusters() {
  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
          <img src={images.a} class="card-img-top" alt="salad" />
          <div class="card-body">
            <h5 class="card-title">Myth: Veganism is too expensive.</h5>
            <p class="card-text">
              Just like any foods, there are some high-end vegan products or
              local vegan eateries that might seem pricey. But the idea that a
              vegan lifestyle will ultimately cost more is simply not true!
              While meat alternatives like tofu, seitan, and tempeh cost roughly
              $3.99/12 oz, the same amount of steak would cost about $5.99. Try
              buying beans, nuts, grains and vegetables in bulk. Dairy
              alternatives and special products like nutritional yeast can be
              purchased at similar prices to eggs, dairy milk, and dairy cheese.
              Grocery prices differ depending upon location, but a vegan
              lifestyle will not break the bank…and won’t break animals’ hearts!
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={images.b} class="card-img-top" alt="protein" />
          <div class="card-body">
            <h5 class="card-title">Myth: Vegans don’t get enough protein.</h5>
            <p class="card-text">
              The average recommended intake of protein is 42g a day.
              Non-vegetarians eat almost double the recommended daily amount,
              but so does everyone else. Vegetarians and vegans on average
              consume 70% more protein than they need every day (over 70g).
              Proteins consist of nine essential amino acids that can only be
              ingested from the foods we eat. Despite popular belief, these
              essential amino acids can be found in non-animal products. Not
              only that, these essential amino acids are only found in meat and
              dairy products because they were originally synthesised by plants
              and then eaten by the animals.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={images.c} class="card-img-top" alt="planet" />
          <div class="card-body">
            <h5 class="card-title">
              Myth: Being vegan isn't going to save the world.
            </h5>
            <p class="card-text">
              Veganism can help to combat world hunger. An estimated 700 million
              tons of food that could be consumed by humans is fed to livestock
              each year. Not only that, 82% of starving children live in
              countries where the food they grow is fed to animals which are
              then eaten by Western countries. A vegan diet can conserve water;
              it takes up to 2,500 gallons of water to produce just one pound of
              beef. This is around 200 times more water than it takes to produce
              a pound of plant foods. Veganism can also reduce the rate of
              climate change and pollution. Livestock from the meat and dairy
              industry account for at least 32,000 million tons of carbon
              dioxide per year. This makes up 51% of all worldwide greenhouse
              gas emissions.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src={images.d} class="card-img-top" alt="cooking" />
          <div class="card-body">
            <h5 class="card-title">Myth: Going Vegan can make you weak</h5>
            <p class="card-text">
              Getting your protein from plants instead of animals does not mean
              the protein is any less effective or nutritious for your body and,
              as proven by many plant-based vegan athletes across the world, you
              don’t need to eat animal protein to be strong. One example is
              vegan strongman Patrik Baboumian who broke a world record for the
              most weight carried by a human-being. He hauled over 1200 pounds –
              roughly the weight of a Smart Car – ten meters across a stage in
              Toronto last year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
