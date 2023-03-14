



export default function MyComponent({isim}){
    const myValue = 123;
    const getMyValue = () => {
        return 321;
    }
    const getMyResult = (parameters) =>{
        return parameters * parameters;
    }
    return(
        <div>
            <h1>GODORO</h1>
            değerim : {myValue}<br/>
            işlevim : {getMyValue()}<br/>
            Sonuc A: {getMyValue()}<br/>
            Sonuc B : {getMyResult(5)}<br/>
            <h2> {isim} </h2>
            
        </div>
    );
};