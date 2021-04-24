
import image2 from '../assets/images/img_2.png';
import image3 from '../assets/images/img_3.png';
import image4 from '../assets/images/img_4.png';
import image5 from '../assets/images/img_5.png';
import image6 from '../assets/images/img_6.png';
import image7 from '../assets/images/img_7.png';
import image8 from '../assets/images/img_8.png';
import image9 from '../assets/images/img_9.png';
import image10 from '../assets/images/img_10.png';


export const arrayColors = ['Amarelo','Azul','Branco','Cinza','Laranja',
                            'Verde','Vermelho','Preto','Rosa','Vinho'];


export const arraySizes = ['P','M','G','GG','U','36','38','40','42','44','46'];


export const arrayPrices = ['de R$0 até R$50','de R$51 até R$150','de R$151 até R$300',
                            'de R$301 até R$500','a partir de R$501'];


export const initialFilter = {id: [], colors: [], prices: [], sizes: []};                                     


export const arrayClothes = [

            {   
                id: 1,
                image: image2,
                description: 'CAMISETA MESCLA',
                price: 'R$ 28,00',
                value: 28.00,
                date: '2021-03-10',
                promotion: 'até 3x de R$9,33',    
                colors: ['Cinza','Laranja','Vermelho'],
                sizes: ['M','U','36','42','46'],                
                range: 0
            },
            {
                id: 2,
                image: image3,
                description: 'SAIA EM COURO',
                price: 'R$ 398,00',
                value: 398.00,
                date: '2021-03-02',
                promotion: 'até 5x de R$30,00',    
                colors: ['Rosa','Laranja','Vermelho','Azul'],
                sizes: ['P','G','GG','40','42'],                
                range: 3    
            },
            {
                id: 3,
                image: image4,
                description: 'CARDIGAN TIGRE',
                price: 'R$ 398,00',
                value: 398.00,
                date: '2021-04-05',
                promotion: 'até 5x de R$30,00',    
                colors: ['Amarelo','Laranja','Verde','Vinho'],
                sizes: ['P','M','36','42'],                
                range: 3    
            },
            {
                id: 4,
                image: image5,
                description: 'CARDIGAN OFF WHITE',
                price: 'R$ 99,90',
                value: 99.90,
                date: '2021-03-03',
                promotion: 'até 3x de R$33,30',    
                colors: ['Cinza','Azul','Branco','Preto'],
                sizes: ['G','GG','44','46'],                
                range: 1    
            },
            {
                id: 5,
                image: image6,
                description: 'BODY LEOPARDO',
                price: 'R$ 129,90',
                value: 129.90,
                date: '2021-04-10',
                promotion: 'até 3x de R$43,43',    
                colors: ['Vermelho','Rosa','Laranja','Vinho'],
                sizes: ['P','U','36','38'],                
                range: 1    
            },
            {
                id: 6,
                image: image7,
                description: 'CASACO PELOS',
                price: 'R$ 398,00',
                value: 398.00,
                date: '2021-03-10',
                promotion: 'até 5x de R$30,00',    
                colors: ['Verde','Azul','Branco','Vinho'],
                sizes: ['G','40','44'],                
                range: 3    
            },
            {
                id: 7,
                image: image8,
                description: 'CROPPED STRIPES',
                price: 'R$ 120,00',
                value: 120.00,
                date: '2021-04-15',
                promotion: 'até 3x de R$40,00',    
                colors: ['Amarelo','Branco','Rosa'],
                sizes: ['P','GG','U'],                
                range: 1    
            },
            {
                id: 8,
                image: image9,
                description: 'CAMISA TRANSPARENTE',
                price: 'R$ 398,00',
                value: 398.00,
                date: '2021-02-20',
                promotion: 'até 5x de R$30,00',    
                colors: ['Azul','Cinza','Preto','Vinho'],
                sizes: ['G','U','38','44'],                
                range: 3    
            },
            {
                id: 9,
                image: image10,
                description: 'POCHETE CLUTCH',
                price: '99,00',
                value: 99.00,
                date: '2021-01-25',
                promotion: 'até 3x de R$33,00',    
                colors: ['Azul','Cinza','Preto','Vinho'],
                sizes: ['M','U','38','40'],                
                range: 1    
            }

]