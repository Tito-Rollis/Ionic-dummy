import React, { useRef } from 'react';
import {
    IonItem,
    IonLabel,
    IonInput,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
} from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

interface Props {
    func: (weight: any, height: any) => void;
}

const Input: React.FC<Props> = ({ func }) => {
    const heightRef = useRef<HTMLIonInputElement>(null);
    const weightRef = useRef<HTMLIonInputElement>(null);
    const handler = () => {
        const heightVal = heightRef.current?.value;
        const weightVal = weightRef.current?.value;
        return func(weightVal, heightVal);
    };

    return (
        <>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating">Your Height</IonLabel>
                        <IonInput ref={heightRef}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating">Your Weight</IonLabel>
                        <IonInput ref={weightRef}></IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-contentbetween">
                <IonCol size="6" className="ion-text-center">
                    <IonButton onClick={handler}>
                        <IonIcon slot="start" icon={calculatorOutline} />
                        Calculate
                    </IonButton>
                </IonCol>
                <IonCol size="6" className="ion-text-center">
                    <IonButton>
                        <IonIcon slot="start" icon={refreshOutline} />
                        Refresh
                    </IonButton>
                </IonCol>
            </IonRow>
        </>
    );
};

export default Input;
