import './Founders.css'

export default function Founders(){
    const founders = [
    {
      "name": "Kanishka Chholak",
      "role": "Senior Advisor",
      "id": "2023uce0052",
      "img" : "",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum illum quasi eligendi aut. Tempora eveniet quidem fuga iusto deserunt laudantium, eius placeat necessitatibus temporibus quaerat officia. Sint cupiditate quidem ipsam, tenetur exercitationem enim, assumenda perspiciatis ad saepe, explicabo eius sequi alias. Tempore sapiente repellat eaque corporis eius, dolorem earum minima nihil. Cum vel delectus repudiandae!",
    },
    {
      "name": "Akshay Malwey",
      "role": "Senior Advisor",
      "id": "2023ucs0080",
      "img" : "",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum illum quasi eligendi aut. Tempora eveniet quidem fuga iusto deserunt laudantium, eius placeat necessitatibus temporibus quaerat officia. Sint cupiditate quidem ipsam, tenetur exercitationem enim, assumenda perspiciatis ad saepe, explicabo eius sequi alias. Tempore sapiente repellat eaque corporis eius, dolorem earum minima nihil. Cum vel delectus repudiandae!"
    },
    {
      "name": "Bhoomi Yadav",
      "role": "Senior Advisor",
      "id": "2023uch0012",
      "img" : "",
      "para": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nostrum illum quasi eligendi aut. Tempora eveniet quidem fuga iusto deserunt laudantium, eius placeat necessitatibus temporibus quaerat officia. Sint cupiditate quidem ipsam, tenetur exercitationem enim, assumenda perspiciatis ad saepe, explicabo eius sequi alias. Tempore sapiente repellat eaque corporis eius, dolorem earum minima nihil. Cum vel delectus repudiandae!"
    },
  ];
    return(
        <div className="main-contents-10">
            <h1>Founding Team</h1>
            {founders.map((person, index) => (
                <div className="founding-member" key={index}>
                    <div className="image-placeholder-1">
                        <img src={person.img} alt="" />
                    </div>
                    <div className="content-placeholder-01">
                    <h2>{person.name} - {person.role}</h2>
                    <p>{person.para}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}