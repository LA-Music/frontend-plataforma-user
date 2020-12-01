import React, { useState } from 'react';
import { CardTitle, Row, Col } from 'reactstrap';
import ReactApexChart from 'react-apexcharts'
import DynamicTable from 'components/Table';
import imgContratar from 'assets/img/img-contratar.svg'
import  { Cards, BtnContratar } from './styles'

const Index = () => {
  
  const [grafAudiencia] = useState({
    series: [{
      name: "Audiência",
      color: '#4ACCCD',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
  })

  const TableObras = ({
      header:[{name: 'Nome da obra', key: 'name'}, {name: 'Data da liberação', key: 'data'}, {name:'Status', key:'status'}],
      body:[
        {name: 'Dakota Rice', data: '26.05.20', status: 'Liberada'}, 
        {name: 'Minerva Hooper', data: '26.05.20', status: 'Negado'},
        {name: 'Doris Greene', data: '26.05.20', status: 'Negado'},
        {name: 'Jon Porter', data: '26.05.20', status: 'Negado'},
      ]
    }
  )
  const TableRegistro = ({
      header:[{name: 'Canção', key: 'cancao'}, {name: 'Registro', key: 'register'}, {name:'Status', key:'status'}],
      body:[
        {cancao: 'Dakota Rice	', register: '26.05.20', status: 'Registrada'}, 
        {cancao: 'Minerva Hooper', register: '20.05.20', status: 'Em analise'},
        {cancao: 'Doris Greene	', register: '15.05.20', status: 'Em analise'},
        {cancao: 'Jon Porter	', register: '04.05.20', status: 'Em analise'},
      ]
    }
  )
  return(
    <div className="content">
      <Row>
        <Col sm="7">
          <Cards body>
            <CardTitle><h6>Recebimento ($)</h6></CardTitle>
            <div id="chart">
              <ReactApexChart options={grafAudiencia.options} series={grafAudiencia.series} height={270}/>
            </div>
          </Cards>
        </Col>
        <Col sm="5">
          <Cards body style={{background: '#E7F0F7'}}>
            <img src={imgContratar} alt="Contratar" />
            <BtnContratar>Quero Contratar</BtnContratar>
          </Cards>
        </Col>
        <Col sm="6">
          <Cards body>
            <CardTitle className="pr-5 d-flex justify-content-between align-items-center"><h6>Cadastro Regularizado</h6><span>Últimos 90 dias</span></CardTitle>
            <DynamicTable {...TableObras} />
          </Cards>
        </Col>
        <Col sm="6">
          <Cards body>
            <CardTitle className="pr-5 d-flex justify-content-between align-items-center"><h6>Músicas em registro</h6><span>Últimos 90 dias</span></CardTitle>
            <DynamicTable {...TableRegistro} />
          </Cards>
        </Col>
      </Row>
    </div>
  )
}

export default Index