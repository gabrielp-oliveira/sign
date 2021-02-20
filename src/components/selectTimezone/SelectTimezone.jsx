import React, { useRef } from 'react'

function SelectTimezone({state}) {
    const Select = useRef()



    function HandleSelect(e) {
        state(Select.current.value)
        // state()
    }

    return (
        <select onChange={(e) => HandleSelect(e)} ref={Select} name="timezone" className="select" >
            <option>-- Timezone --</option>
            <option value="Etc/GMT+12">International Date Line West (GMT-12:00) </option>
            <option value="Pacific/Midway"> Midway Island, Samoa (GMT-11:00)</option>
            <option value="Pacific/Honolulu"> Hawaii (GMT-10:00)</option>
            <option value="US/Alaska"> Alaska (GMT-09:00)</option>
            <option value="America/Los_Angeles"> Pacific Time (US & Canada) (GMT-08:00)</option>
            <option value="America/Tijuana"> Tijuana, Baja California (GMT-08:00)</option>
            <option value="US/Arizona"> Arizona (GMT-07:00)</option>
            <option value="America/Chihuahua"> Chihuahua, La Paz, Mazatlan (GMT-07:00)</option>
            <option value="US/Mountain"> Mountain Time (US & Canada) (GMT-07:00)</option>
            <option value="America/Managua"> Central America (GMT-06:00)</option>
            <option value="US/Central"> Central Time (US & Canada) (GMT-06:00)</option>
            <option value="America/Mexico_City"> Guadalajara, Mexico City, Monterrey (GMT-06:00)</option>
            <option value="Canada/Saskatchewan"> Saskatchewan (GMT-06:00)</option>
            <option value="America/Bogota"> Bogota, Lima, Quito, Rio Branco (GMT-05:00)</option>
            <option value="US/Eastern"> Eastern Time (US & Canada) (GMT-05:00)</option>
            <option value="US/East-Indiana"> Indiana (East) (GMT-05:00)</option>
            <option value="Canada/Atlantic"> Atlantic Time (Canada) (GMT-04:00)</option>
            <option value="America/Caracas"> Caracas, La Paz (GMT-04:00)</option>
            <option value="America/Manaus"> Manaus (GMT-04:00)</option>
            <option value="America/Santiago"> Santiago (GMT-04:00)</option>
            <option value="Canada/Newfoundland"> Newfoundland (GMT-03:30)</option>
            <option value="America/Sao_Paulo"> Brasilia (GMT-03:00)</option>
            <option value="America/Argentina/Buenos_Aires"> Buenos Aires, Georgetown (GMT-03:00)</option>
            <option value="America/Godthab"> Greenland (GMT-03:00)</option>
            <option value="America/Montevideo"> Montevideo (GMT-03:00)</option>
            <option value="America/Noronha"> Mid-Atlantic (GMT-02:00)</option>
            <option value="Atlantic/Cape_Verde"> Cape Verde Is. (GMT-01:00)</option>
            <option value="Atlantic/Azores"> Azores (GMT-01:00)</option>
            <option value="Africa/Casablanca"> Casablanca, Monrovia, Reykjavik (GMT+00:00)</option>
            <option value="Etc/Greenwich"> Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London (GMT+00:00)</option>
            <option value="Europe/Amsterdam"> Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna (GMT+01:00)</option>
            <option value="Europe/Belgrade"> Belgrade, Bratislava, Budapest, Ljubljana, Prague (GMT+01:00)</option>
            <option value="Europe/Brussels"> Brussels, Copenhagen, Madrid, Paris (GMT+01:00)</option>
            <option value="Europe/Sarajevo"> Sarajevo, Skopje, Warsaw, Zagreb (GMT+01:00)</option>
            <option value="Africa/Lagos"> West Central Africa (GMT+01:00)</option>
            <option value="Asia/Amman"> Amman (GMT+02:00)</option>
            <option value="Europe/Athens"> Athens, Bucharest, Istanbul (GMT+02:00)</option>
            <option value="Asia/Beirut"> Beirut (GMT+02:00)</option>
            <option value="Africa/Cairo"> Cairo (GMT+02:00)</option>
            <option value="Africa/Harare"> Harare, Pretoria (GMT+02:00)</option>
            <option value="Europe/Helsinki"> Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius (GMT+02:00)</option>
            <option value="Asia/Jerusalem"> Jerusalem (GMT+02:00)</option>
            <option value="Europe/Minsk"> Minsk (GMT+02:00)</option>
            <option value="Africa/Windhoek"> Windhoek (GMT+02:00)</option>
            <option value="Asia/Kuwait"> Kuwait, Riyadh, Baghdad (GMT+03:00)</option>
            <option value="Europe/Moscow"> Moscow, St. Petersburg, Volgograd (GMT+03:00)</option>
            <option value="Africa/Nairobi"> Nairobi (GMT+03:00)</option>
            <option value="Asia/Tbilisi"> Tbilisi (GMT+03:00)</option>
            <option value="Asia/Tehran"> Tehran (GMT+03:30)</option>
            <option value="Asia/Muscat"> Abu Dhabi, Muscat (GMT+04:00)</option>
            <option value="Asia/Baku"> Baku (GMT+04:00)</option>
            <option value="Asia/Yerevan"> Yerevan (GMT+04:00)</option>
            <option value="Asia/Kabul"> Kabul (GMT+04:30)</option>
            <option value="Asia/Yekaterinburg"> Yekaterinburg (GMT+05:00)</option>
            <option value="Asia/Karachi"> Islamabad, Karachi, Tashkent (GMT+05:00)</option>
            <option value="Asia/Calcutta"> Chennai, Kolkata, Mumbai, New Delhi (GMT+05:30)</option>
            <option value="Asia/Calcutta"> Sri Jayawardenapura (GMT+05:30)</option>
            <option value="Asia/Katmandu"> Kathmandu (GMT+05:45)</option>
            <option value="Asia/Almaty"> Almaty, Novosibirsk (GMT+06:00)</option>
            <option value="Asia/Dhaka"> Astana, Dhaka (GMT+06:00)</option>
            <option value="Asia/Rangoon"> Yangon (Rangoon) (GMT+06:30)</option>
            <option value="Asia/Bangkok"> Bangkok, Hanoi, Jakarta (GMT+07:00)</option>
            <option value="Asia/Krasnoyarsk"> Krasnoyarsk (GMT+07:00)</option>
            <option value="Asia/Hong_Kong"> Beijing, Chongqing, Hong Kong, Urumqi (GMT+08:00)</option>
            <option value="Asia/Kuala_Lumpur"> Kuala Lumpur, Singapore (GMT+08:00)</option>
            <option value="Asia/Irkutsk"> Irkutsk, Ulaan Bataar (GMT+08:00)</option>
            <option value="Australia/Perth"> Perth (GMT+08:00)</option>
            <option value="Asia/Taipei"> Taipei (GMT+08:00)</option>
            <option value="Asia/Tokyo"> Osaka, Sapporo, Tokyo (GMT+09:00)</option>
            <option value="Asia/Seoul"> Seoul (GMT+09:00)</option>
            <option value="Asia/Yakutsk"> Yakutsk (GMT+09:00)</option>
            <option value="Australia/Adelaide"> Adelaide (GMT+09:30)</option>
            <option value="Australia/Darwin"> Darwin (GMT+09:30)</option>
            <option value="Australia/Brisbane"> Brisbane (GMT+10:00)</option>
            <option value="Australia/Canberra"> Canberra, Melbourne, Sydney (GMT+10:00)</option>
            <option value="Australia/Hobart"> Hobart (GMT+10:00)</option>
            <option value="Pacific/Guam"> Guam, Port Moresby (GMT+10:00)</option>
            <option value="Asia/Vladivostok"> Vladivostok (GMT+10:00)</option>
            <option value="Asia/Magadan"> Magadan, Solomon Is., New Caledonia (GMT+11:00)</option>
            <option value="Pacific/Auckland">) Auckland, Wellington (GMT+12:00</option>
            <option value="Pacific/Fiji"> Fiji, Kamchatka, Marshall Is. (GMT+12:00)</option>
            <option value="Pacific/Tongatapu"> Nuku'alofa (GMT+13:00)</option>
        </select>
    )
}

export default SelectTimezone
