import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(CortanaImage);
console.log(SiriImage); // large size image

function App() {
    return (
        <div>
            <div>Personal Digital Assistans</div>

            <img src="https://picsum.photos/200/300" />
            {/* <img src={AlexaImage} />
            <img src={SiriImage} /> */}

            <ProfileCard title="Alexa" handle="@alexa99"/>
            <ProfileCard title="Cortana" handle="@cortana32"/>
            <ProfileCard title="Siri" handle="@siri01"/>
        </div>
    );
}

export default App;