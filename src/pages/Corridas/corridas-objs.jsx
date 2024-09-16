//Definindo os objetos

const raceInfo = [
  {
    id: '1',
    city: 'Mexico City',
    round: 'Round 01',
    date: {
      day: '13',
      month: 'JAN',
    },
    flag: {
      src: './src/assets/img/flags/mexico.svg',
      alt: 'Bandeira do Mexico',
    },
    hour: 'Corrida: 17h03 - 18h00',
    background: './src/assets/img/landscapes/mexico-city.png',
  },
  {
    id: '2',
    city: 'Diriyah',
    round: 'Round 02',
    date: {
      day: '26',
      month: 'JAN',
    },
    flag: {
      src: './src/assets/img/flags/arabia-saudita.svg',
      alt: 'Bandeira da Arabia Saudita',
    },
    hour: 'Corrida: 14h04 - 15h30',
    background: './src/assets/img/landscapes/diriyah.png',
  },
  {
    id: '3',
    city: 'Diriyah',
    round: 'Round 03',
    date: {
      day: '27',
      month: 'JAN',
    },
    flag: {
      src: './src/assets/img/flags/arabia-saudita.svg',
      alt: 'Bandeira da Arabia Saudita',
    },
    hour: 'Corrida: 14h04 - 15h00',
    background: './src/assets/img/landscapes/diriyah.png',
  },
  {
    id: '4',
    city: 'São Paulo',
    round: 'Round 04',
    date: {
      day: '16',
      month: 'MAR',
    },
    flag: {
      src: './src/assets/img/flags/brasil.svg',
      alt: 'Bandeira do Brasil',
    },
    hour: 'Corrida: 14h03 - 15h00',
    background: './src/assets/img/landscapes/sao-paulo.png',
  },
  {
    id: '5',
    city: 'Tóquio',
    round: 'Round 05',
    date: {
      day: '30',
      month: 'MAR',
    },
    flag: {
      src: './src/assets/img/flags/japao.svg',
      alt: 'Bandeira do Japão',
    },
    hour: 'Corrida: 03h03 - 04h00',
    background: './src/assets/img/landscapes/tokio.png',
  },
  {
    id: '6',
    city: 'Misano',
    round: 'Round 06',
    date: {
      day: '13',
      month: 'ABR',
    },
    flag: {
      src: './src/assets/img/flags/italia.svg',
      alt: 'Bandeira da Italia',
    },
    hour: 'Corrida: 10h03 - 11h00',
    background: './src/assets/img/landscapes/misano.png',
  },
  {
    id: '7',
    city: 'Misano',
    round: 'Round 07',
    date: {
      day: '14',
      month: 'ABR',
    },
    flag: {
      src: './src/assets/img/flags/italia.svg',
      alt: 'Bandeira da Italia',
    },
    hour: 'Corrida: 10h03 - 11h00',
    background: './src/assets/img/landscapes/misano.png',
  },
  {
    id: '8',
    city: 'Monaco',
    round: 'Round 08',
    date: {
      day: '27',
      month: 'ABR',
    },
    flag: {
      src: './src/assets/img/flags/monaco.svg',
      alt: 'Bandeira de Monaco',
    },
    hour: 'Corrida: 10h03 - 11h30',
    background: './src/assets/img/landscapes/monaco.png',
  },
  {
    id: '9',
    city: 'Berlin',
    round: 'Round 09',
    date: {
      day: '11',
      month: 'MAIO',
    },
    flag: {
      src: './src/assets/img/flags/alemanha.svg',
      alt: 'Bandeira da Alemanha',
    },
    hour: 'Corrida: 10h03 - 11h30',
    background: './src/assets/img/landscapes/berlin.png',
  },
  {
    id: '10',
    city: 'Berlin',
    round: 'Round 10',
    date: {
      day: '12',
      month: 'MAIO',
    },
    flag: {
      src: './src/assets/img/flags/alemanha.svg',
      alt: 'Bandeira da Alemanha',
    },
    hour: 'Corrida: 10h03 - 11h30',
    background: './src/assets/img/landscapes/berlin.png',
  },
  {
    id: '11',
    city: 'Xangai',
    round: 'Round 11',
    date: {
      day: '25',
      month: 'MAIO',
    },
    flag: {
      src: './src/assets/img/flags/china.svg',
      alt: 'Bandeira da China',
    },
    hour: 'Corrida: 04h03 - 05h00',
    background: './src/assets/img/landscapes/shangai.png',
  },
  {
    id: '12',
    city: 'Xangai',
    round: 'Round 12',
    date: {
      day: '26',
      month: 'MAIO',
    },
    flag: {
      src: './src/assets/img/flags/china.svg',
      alt: 'Bandeira da China',
    },
    hour: 'Corrida: 04h03 - 05h00',
    background: './src/assets/img/landscapes/shangai.png',
  },
  {
    id: '13',
    city: 'Portland',
    round: 'Round 13',
    date: {
      day: '29',
      month: 'JUN',
    },
    flag: {
      src: './src/assets/img/flags/us.svg',
      alt: 'Bandeira dos Estados Unidos',
    },
    hour: 'Corrida: 18h03 - 19h30',
    background: './src/assets/img/landscapes/portland.png',
  },
  {
    id: '14',
    city: 'Portland',
    round: 'Round 14',
    date: {
      day: '30',
      month: 'JUN',
    },
    flag: {
      src: './src/assets/img/flags/us.svg',
      alt: 'Bandeira dos Estados Unidos',
    },
    hour: 'Corrida: 18h03 - 19h30',
    background: './src/assets/img/landscapes/portland.png',
  },
  {
    id: '15',
    city: 'Londres',
    round: 'Round 15',
    date: {
      day: '20',
      month: 'JUL',
    },
    flag: {
      src: './src/assets/img/flags/reino-unido.svg',
      alt: 'Bandeira do Reino Unido',
    },
    hour: 'Corrida: 13h03 - 14h30',
    background: './src/assets/img/landscapes/londres.png',
  },
  {
    id: '16',
    city: 'Londres',
    round: 'Round 16',
    date: {
      day: '21',
      month: 'JUL',
    },
    flag: {
      src: './src/assets/img/flags/reino-unido.svg',
      alt: 'Bandeira do Reino Unido',
    },
    hour: 'Corrida: 13h03 - 14h30',
    background: './src/assets/img/landscapes/londres.png',
  },
];

export default function RaceInfo() {
  return raceInfo;
}
