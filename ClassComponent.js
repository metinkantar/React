import React from "react";

class ClassComponent extends React.Component {
  // yeni yöntem Costructor 
  // state = {}
  
  // eski yöntem Costructor 
  constructor(props) {
    super(props);
    this.state = {
      arttir: 0
    };
  }
  
  componentDidMount(){
  /*
    Bir bileşen, DOM ağacına eklendikten hemen sonra componentDidMount() çalıştırılır. 
    DOM düğümleri ile ilişkili atama işlemleri bu fonksiyon içerisinde yapılmalıdır. 
    Bu nedenle eğer verilerimizi uzak bir API’den yüklememiz gerekiyorsa, ağ isteğini bu fonksiyonda başlatabiliriz.
  */
  }
  
 // Bileşen güncellendiğinde ve DOM üzerinde yapmak istediğimiz işleri gerçekleştirmek için bu metodu kullanırız.
 componentDidUpdate(prevProps) {
  // Genel kullanım (prop değerlerini karşılaştırmayı unutmayınız!):
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
  
  componentWillUnmount(){
    /*
      componentDidMount()‘ta yapılan; zamanlayıcı fonksiyonların geçersiz kılınması, 
      ağ isteklerinin iptal edilmesi, veya herhangi bir abonelik metodunun temizlenmesi gibi işlemleri bu metotta gerçekleştirebiliriz.
    */
  }

  sayiArttir = () => {
    this.setState({
      arttir: this.state.arttir + 1
    });
  };

  sayiAzalt = () => {
    this.setState({
      arttir: this.state.arttir - 1
    });
  };

  render() {
    return (
      <di>
        <h1>Class Component</h1>
        <h3>(Sınıf Bileşeni)</h3>
        <p>Counter : {this.state.arttir}</p>
        <button onClick={() => this.sayiArttir()}>Arttır</button>
        <button onClick={() => this.sayiAzalt()}>Azalt</button>
      </di>
    );
  }
}

export default ClassComponent;
