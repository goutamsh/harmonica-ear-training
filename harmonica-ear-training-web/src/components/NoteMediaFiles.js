import sa_note from '../sounds/sa.aac';
import re_note from '../sounds/re.aac';
import ga_note from '../sounds/ga.aac';
import ma_note from '../sounds/ma.aac';
import pa_note from '../sounds/pa.aac';
import dha_note from '../sounds/dha.aac';
import ni_note from '../sounds/ni.aac';
import ss_note from '../sounds/ss.aac';
// import re_komal_note from '../sounds/re_komal.aac';
// import ga_komal_note from '../sounds/ga_komal.aac';
// import ma_tivra_note from '../sounds/ma_tivra.aac';
// import dha_komal_note from '../sounds/dha_komal.aac';
// import ni_komal_note from '../sounds/ni_komal.aac';

export const note_file_map = new Map([
    ['sa', sa_note], 
    ['re', re_note],
    ['ga', ga_note],
    ['ma', ma_note],
    ['pa', pa_note],
    ['dha', dha_note],
    ['ni', ni_note],
    ['ss', ss_note]
    // ,
    // ['re_komal', re_komal_note],
    // ['ga_komal', ga_komal_note],
    // ['ma_tivra', ma_tivra_note],
    // ['dha_komal', dha_komal_note],
    // ['ni_komal', ni_komal_note]       
]);

export const quizQuestionSet = {
    list:[
        {
            id: 1,
            note: 'sa',
            file: sa_note
        },
        {
            id: 2,
            note: 're',
            file: re_note
        },
        {
            id: 3,
            note: 'ga',
            file: ga_note
        },
        {
            id: 4,
            note: 'ma',
            file: ma_note
        },
        {
            id: 5,
            note: 'pa',
            file: pa_note
        },
        {
            id: 6,
            note: 'dha',
            file: dha_note
        },
        {
            id: 7,
            note: 'ni',
            file: ni_note
        },
        {
            id: 8,
            note: 'ss',
            file: ss_note
        }
    ]
};

export const bgColors = { 
    "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};