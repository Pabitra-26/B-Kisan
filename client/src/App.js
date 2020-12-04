import logo from './logo.svg';
import './App.css';
import REACT from 'react'
import axios from 'axios'





class App extends REACT.Component {
    state = {
      posts : []
    }
  
  getRecords = () =>{
    axios.get('http://localhost:8080/show')
    .then((response) => {
      const data = response.data
      this.setState({
        posts : data
      })
      console.log('Data has been retrieved')
    })
    .catch(() =>{
      console.log('Data could not be retrieved')
    })
  }


  getRecordsInCsv = () =>{    
    var csvRow = []
    var fetchedData = [['id' , 'Order No' , 'Name' , 'Address' , 'Tehsil' , 'District' , 'Pincode' , 'State' ,
                        'Whatsapp' , 'Contact' , 'Company Name' , 'Order 1' , ' ', ' ',' ' , ' ','Order 2',
                         ' ',' ' , ' ', ' ' ,'Total Amount' , 'Advance' ,
                        'Delivery Place' , 'Deposit',' ', ' ', 'Account Holder' , 'Account No' , 'IFSC' , 
                        'Dealer Name' , 'Dealer Contact']]

    var empty1 = Array(11).fill(' ')
    var OrderColumns = ['Order Id' , 'Details' , 'Quantity' , 'Rate' , 'Amount']
    var empty2 = Array(3).fill(' ')
    var DepositColumns = ['Amount' , 'UIRNo' , 'Bank']
    var empty3 = Array(5).fill(' ')
    var secondRow = empty1.concat( OrderColumns,OrderColumns, empty2, DepositColumns, empty3)
    fetchedData.push(secondRow)

    var records = this.state.posts

    for(var i = 0; i<records.length; i++){
      fetchedData.push([records[i]._id  , records[i].OrderNo , records[i].Name.split(' ').join('%20') , 
                        records[i].Address.split(' ').join('%20') , records[i].Tehsil.split(' ').join('%20'),
                        records[i].District .split(' ').join('%20'), records[i].PinCode , records[i].State.split(' ').join('%20'),
                        records[i].Whatsapp , records[i].Contact, records[i].CompanyName.split(' ').join('%20'),
                        records[i].Order[0]._id, records[i].Order[0].Details,
                        records[i].Order[0].Qty, records[i].Order[0].Rate, records[i].Order[0].Amount,
                        records[i].Order[1]._id, records[i].Order[1].Details,
                        records[i].Order[1].Qty, records[i].Order[1].Rate, records[i].Order[1].Amount,
                        records[i].TotalAmt, records[i].Advance, records[i].DeliveryPlace.split(' ').join('%20'),
                        records[i].Deposit.Amount, records[i].Deposit.UIRNo, records[i].Deposit.Bank.split(' ').join('%20'),
                        records[i].AcHolder.split(' ').join('%20'), records[i].AcNo, records[i].IFSC, records[i].DealerName.split(' ').join('%20'),
                        records[i].DealerContact])
    }

    for(var item = 0; item<fetchedData.length;item++){
      csvRow.push(fetchedData[item].join(","))
    }
    // console.log(csvRow)
    const csvString = csvRow.join("%0A")
    console.log(csvString)
    var a = document.createElement("a")
    a.href = 'data:attachment/csv,' + csvString
    a.target = "_Blank"
    a.download = 'recordsfile.csv'
    document.body.appendChild(a)
    a.click()
  }
    

  
  render(){
    
    return (
      <div className="App">
        <button onClick = {this.getRecords}>Retrieve records</button>
        <button onClick = {this.getRecordsInCsv}>Print all records</button>
        
        
      </div>
    );
  }
}

export default App;
