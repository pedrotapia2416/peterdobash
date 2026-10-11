import chrisStussyImage from '../../../assets/images/influences/chris-stussy.jpg';
import eastEndDubsImage from '../../../assets/images/influences/east-end-dubs.jpg';
import interplanetaryCriminalImage from '../../../assets/images/influences/interplanetary-criminal.jpg';
import mainPhaseImage from '../../../assets/images/influences/main-phase.jpg';
import silvaBumpaImage from '../../../assets/images/influences/silva-bumpa.jpg';
import journey01Image from '../../../assets/images/journeys/journey-01.png';
import journey02Image from '../../../assets/images/journeys/journey-02.png';
import journey03Image from '../../../assets/images/journeys/journey-03.png';
import journey04Image from '../../../assets/images/journeys/journey-04.png';
import afterhoursWarehouseImage from '../../../assets/images/journeys/deep-signal/afterhours-warehouse.png';
import minimalArchitectureImage from '../../../assets/images/journeys/deep-signal/minimal-architecture.png';
import vinylDetailsImage from '../../../assets/images/journeys/deep-signal/vinyl-details.png';
import clubImage from '../../../assets/images/journeys/gallery/journey-03-club.jpg';
import londonImage from '../../../assets/images/journeys/gallery/journey-03-london.jpg';
import vinylImage from '../../../assets/images/journeys/gallery/journey-03-vinyl.jpg';
import type { JourneyDetailConfig } from '../types';

export const journeyDetailConfigs: Record<string, JourneyDetailConfig> = {
  '01': {
    id: '01',
    slug: 'the-deep-signal',
    titleLines: ['The', 'Deep', 'Signal'],
    subtitle: ['Profundidad.', 'Espacio.', 'Movimiento hipnotico.'],
    heroImage: journey01Image,
    concept: {
      meta: 'Afterhours / Deep Listening / 118 - 126 BPM',
      paragraphs: [
        'The Deep Signal representa el lado mas profundo de mi identidad musical.',
        'Es un recorrido construido desde la paciencia.',
        'No busca impacto inmediato ni momentos explosivos.',
        'Busca generar conexion a traves del groove, la textura y el movimiento constante.',
        'La energia aparece lentamente.',
        'La tension se construye en pequenos detalles.',
        'Y el viaje se desarrolla sin apuro.',
        'Es musica para escuchar, sentir y habitar.',
        'Un recorrido pensado para afterhours, aperturas largas y espacios donde la profundidad importa mas que la velocidad.',
      ],
    },
    map: [
      {
        id: '01',
        title: 'Deep House',
        body: 'Espacio. Respiracion. Las primeras capas comienzan a aparecer.',
      },
      {
        id: '02',
        title: 'Minimal',
        body: 'Menos elementos. Mas intencion. La tension empieza a construirse.',
      },
      {
        id: '03',
        title: 'Rollers',
        body: 'Movimiento constante. Nada explota. Todo avanza.',
      },
      {
        id: '04',
        title: 'DeepTech',
        body: 'Microdetalles. Hipnosis. Precision.',
      },
      {
        id: '05',
        title: 'Break & Groove',
        body: 'Pequenas rupturas. El recorrido toma nuevas formas sin perder profundidad.',
      },
    ],
    references: [
      { name: 'Chris Stussy', tags: ['Deep House', 'Groove', 'Elegancia'], image: chrisStussyImage },
      { name: 'East End Dubs', tags: ['Minimal', 'Presion', 'Hipnosis'], image: eastEndDubsImage },
      { name: 'Janeret', tags: ['DeepTech', 'Textura', 'Espacio'], image: minimalArchitectureImage },
      { name: 'Toman', tags: ['House Profundo', 'Groove', 'Fluidez'], image: vinylDetailsImage },
      { name: 'Enzo Siragusa', tags: ['Rollers', 'Afterhours', 'Cultura Underground'], image: afterhoursWarehouseImage },
    ],
    listen: {
      soundcloudLabel: 'SoundCloud',
      duration: '1:58:00',
      youtubeLabel: 'YouTube',
      image: afterhoursWarehouseImage,
    },
    technical: [
      { label: 'BPM', value: '118 - 126' },
      { label: 'Energia', value: '■■■■■□□□□□' },
      { label: 'Contexto', value: 'Afterhours' },
      { label: 'Momento', value: 'Warm Up / Deep Session' },
      { label: 'Influencia', value: 'Deep House / Minimal / DeepTech' },
      { label: 'Duracion aprox.', value: '90 - 180 min' },
      { label: 'Clave', value: 'Profundidad + Hipnosis + Groove' },
    ],
    gallery: [
      { image: journey01Image, label: 'Deep signal / source' },
      { image: minimalArchitectureImage, label: 'Concrete & texture' },
      { image: afterhoursWarehouseImage, label: 'Afterhours atmosphere' },
      { image: minimalArchitectureImage, label: 'Minimal architecture' },
      { image: vinylDetailsImage, label: 'Groove without urgency' },
      { image: journey02Image, label: 'The long route' },
    ],
    previous: {
      id: '12',
      title: 'Closing Session',
      href: '/journey/12',
    },
    next: {
      id: '02',
      title: 'Bassline Theory',
      href: '/journey/02',
    },
  },
  '03': {
    id: '03',
    slug: 'groove-transmission',
    titleLines: ['Groove', 'Transmission'],
    subtitle: ['Swing britanico.', 'Groove de club.', 'Presion bass.'],
    heroImage: journey03Image,
    concept: {
      meta: 'Club / Peak Time / 128 - 134 BPM',
      paragraphs: [
        'Este recorrido explora la transicion entre el House grooveado y la cultura bass britanica.',
        'Parte desde ritmos organicos, atraviesa territorios UK Garage y termina en zonas de alta presion.',
        'Un viaje pensado para clubes, horarios centrales y momentos donde la pista necesita moverse.',
      ],
    },
    map: [
      { id: '01', title: 'House', body: 'Groove profundo. Elementos organicos. La pista despierta.' },
      { id: '02', title: 'Breaks', body: 'Ritmos quebrados. El swing comienza a tomar forma.' },
      { id: '03', title: 'UK Garage', body: 'Shuffle. Bassline. La energia se vuelve mas fisica.' },
      { id: '04', title: 'Bassline', body: 'Mas bajos. Mas presion. El cuerpo ya esta dentro.' },
      { id: '05', title: 'Bass House', body: 'Impacto. Energia maxima sin perder direccion.' },
    ],
    references: [
      { name: 'Interplanetary Criminal', tags: ['UK Garage', 'Bassline', 'Cultura club'], image: interplanetaryCriminalImage },
      { name: 'Main Phase', tags: ['Bass Culture', 'Breaks', 'Peso'], image: mainPhaseImage },
      { name: 'Silva Bumpa', tags: ['Garage', 'Energia', 'Swing'], image: silvaBumpaImage },
      { name: 'Shen', tags: ['Minimal Garage', 'Deep', 'Atmosfera'], image: clubImage },
      { name: 'DJ Q', tags: ['UK Garage', 'Historico', 'Influencia'], image: vinylImage },
    ],
    listen: {
      soundcloudLabel: 'SoundCloud',
      duration: '1:18:24',
      youtubeLabel: 'YouTube live set',
      image: journey03Image,
    },
    technical: [
      { label: 'BPM', value: '128 - 134' },
      { label: 'Energia', value: '■■■■■■■■□□' },
      { label: 'Contexto', value: 'Club' },
      { label: 'Momento', value: 'Peak Time' },
      { label: 'Influencia', value: 'UK / Bass Culture' },
      { label: 'Duracion aprox.', value: '60 - 90 min' },
      { label: 'Clave', value: 'Groove + Swing + Presion' },
    ],
    gallery: [
      { image: journey03Image, label: '128 BPM / route signal' },
      { image: londonImage, label: 'UK underground / motion' },
      { image: clubImage, label: 'Club pressure / crowd energy' },
      { image: vinylImage, label: 'Vinyl culture / bassline source' },
      { image: journey02Image, label: 'Deep route connection' },
      { image: journey04Image, label: 'Tech bass continuation' },
    ],
    previous: {
      id: '02',
      title: 'Bassline Theory',
      href: '/journey/02',
    },
    next: {
      id: '04',
      title: 'Club Pressure',
      href: '/journey/04',
    },
  },
};
