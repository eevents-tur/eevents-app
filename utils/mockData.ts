import { Category, Event } from '@/types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Capoeira de Rua',
    location: 'Rio de Janeiro/RJ',
    date: '15 Out',
    image: 'https://picsum.photos/id/1/200/300',
    category: 'Esportivo',
    featured: true,
  },
  {
    id: '2',
    title: 'Capoeira de Rua',
    location: 'Rio de Janeiro/RJ',
    date: '15 Out',
    image: 'https://picsum.photos/id/2/200/300',
    category: 'Esportivo',
    featured: true,
  },
  {
    id: '3',
    title: 'Agro Summit',
    location: 'Campinas/SP',
    date: '03/06/2025',
    image: 'https://picsum.photos/id/3/200/300',
    category: 'Feira',
    featured: false,
    description: 'O Grupo Portal ERP irá realizar no dia 3 de junho de 2025 a 1ª edição do Agro Summit, 1º evento exclusivamente dedicado a apresentar soluções em sistemas, softwares de gestão e tecnologias para o agronegócio brasileiro, segmento este responsável por cerca de 25 a 30% do PIB nacional.',
    likes: 12,
    comments: 5,
    website: 'agrosummit.com.br',
  },
];

export const categories: Category[] = [
  { id: '1', name: 'Gastronômico', icon: 'utensils' },
  { id: '2', name: 'Cultural', icon: 'theater-masks' },
  { id: '3', name: 'Esportivo', icon: 'running' },
  { id: '4', name: 'Religioso', icon: 'pray' },
  { id: '5', name: 'Feira', icon: 'store' },
];
