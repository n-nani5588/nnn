import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { MDBDataTable } from 'mdbreact';
import './orders.css'
import Axios from 'axios';



const classes  = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));


let data = {
  columns: [
    {
      label: 'Sno',
      field: 'Sno',
    },
    {
      label: 'User Id',
      field: 'userid',
    },
    {
      label: 'Treasure Name',
      field: 'tname',
    },
    {
      label: 'Amount',
      field: 'amount',
    },
    {
      label: 'Pins',
      field: 'pins',
    },
    {
      label: 'Total',
      field: 'total',
    }
  ],
  rows: []
};

export default class TreasureStatement extends React.Component {

  constructor(){

    super();
    this.state = {
      data1: {},
    }

  }

  componentDidMount(){

    const userdata = JSON.parse(sessionStorage.getItem('USER_DETAILS'))

    Axios.get(`/api/users/getPoolStatementDetails/${userdata.userId}`)
    .then(res => {
      if(parseInt(res.data.status) === parseInt(1)){

        this.createTable(res.data.user)

      }
      else
      {

        this.setState({data1: data})

      }
    })

  }

  createTable= (members)=> {
    let i = 0;
    data.rows = [];
    console.log(members);
   
 {members && members.map(Direct => {
          i++
          const obj = {
            Sno: i,
            userid: Direct.userId,
            tname: Direct.poolName,
            amount: Direct.Amountadded,
            pins: Direct.pinsadded,
            total: Direct.total
          }

           data.rows.push(obj)
  } )}

  this.setState({data1 : data})

}
  
  render(){

    return (
      <React.Fragment>
        {/* <Title>Recent Orders</Title> */}
        {/* <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
         */}
  
                      <MDBDataTable
                      striped
                      bordered
                      sortable={false}
                      theadColor="#fff"
                      entries={7}
                      small
                      noBottomColumns
                      responsiveSm
                      responsiveMd
                      data={this.state.data1}
                      />  
  
        <div className={classes.seeMore}>
       
          <Link color="primary" href="#" >
            See more orders
          </Link>
        </div>
      </React.Fragment>
    
    );

  }

 
}