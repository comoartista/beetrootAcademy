import Section from "./component/section/Section.jsx";

function App() {
  const dogsSection = [{
    title: "Weimaraner",
    text: "Originally bred as a gundog to handle big game like deer and bear, the Weimaraner, or “Silver Ghost,” was a highly sought-after dog breed in their native Germany. Today, these elegant but demanding dogs can still be found out on the hunting grounds. However, they can also make fine family friends if they get enough exercise. DogTime recommends this big, spacious crate to give your big Weimaraner a place to rest and relax. You should also pick up this dog fetch toy to help burn off your pup’s high energy!", 
    img: "https://www.greenhero.de/media/image/95/73/9d/greenhero_ratgeber_weimaraner_1400x1200.webp"
  },
  {
    title: "Airedale Terrier",
    text: "Known as the “King of Terriers,” the Airedale is indeed the largest of all terriers. The dog breed originated in the Aire Valley of Yorkshire and was created to catch otters and rats in the region between the Aire and Wharfe Rivers. An able sporting dog, they became an ideal working dog as well, proving their worth during World War I. Although these are purebred dogs, you may find them in the care of rescue groups or shelters. Opt to adopt if you want to bring one of these pups home! Intelligent, outgoing, and confident, the Airedale Terrier possesses a wonderful playful streak that delights their humans. Novice pet parents and apartment dwellers should beware, though. These dogs have high energy and need plenty of exercise, and their intensity might be a little much for first-time dog trainers. But if you can meet the breed’s physical needs and provide them with space to run, preferably in the form of a big yard with a tall, secure fence, then you’ll be rewarded with a playful, loving companion for the whole family–even kids!",
    img: "https://www.zooroyal.de/magazin/wp-content/uploads/2018/02/airedale-terrier-760x570.jpg"
  }


]
  return (
    <>
      <Section 
      text={dogsSection[0].text}
      img={dogsSection[0].img}
      />
      
      <Section 
      title={dogsSection[1].title} 
      text={dogsSection[1].text}
      img={dogsSection[1].img}
      />
    </>
  );
}

export default App;
