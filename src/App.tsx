import {
    IonApp,
    IonButton,
    IonCol,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    IonRow,
    IonTitle,
    IonToolbar,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Input from './components/input/input';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';
const App: React.FC = () => {
    const calculatingBMI = (weight: any, height: any) => {
        console.log(parseInt(weight) / (parseInt(height) * parseInt(height)));
    };
    return (
        <IonApp>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle className="ion-text-center">
                        BMI Calculator
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Input func={calculatingBMI} />
            </IonContent>
            {/* <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter> */}
        </IonApp>
    );
};

export default App;
