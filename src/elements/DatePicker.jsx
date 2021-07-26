import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import {es} from 'date-fns/locale';

function parseDate(str, format) {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format) {
  return dateFnsFormat(date, format, { locale: es });
}

const DatePicker = ({ date, changeDate }) => {

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];
    const dias_semana_cortos = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

    return (
        <ContenedorInput>
            <DayPickerInput 
                value={date} 
                onDayChange={(day)=>changeDate(day)} 
                format="dd 'de' MMM 'de' yyyy" 
                formatDate={formatDate} 
                parseDate={parseDate}

                dayPickerProps={
                    {
                        months: meses,
                        weekdaysShort: dias_semana_cortos
                    }
                }
            />
        </ContenedorInput>
    );
}

const ContenedorInput = styled.div`
    width: 32%;
    input {
        font-family: 'Work Sans', sans-serif;       
        color: #fff;
        box-sizing: border-box;
        background: ${theme.naranja};
        border: none;
        cursor: pointer;
        border-radius: 8px;
        width: 100%;
        padding: 8px 20px;
        font-size: 18px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default DatePicker;