const countries = [
    {
        "name": "Algeria",
        "region": "Africa",
        "subregion": "Northern Africa",
        "flag": "https://flagcdn.com/w320/dz.png"
    },
    {
        "name": "Angola",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/ao.png"
    },
    {
        "name": "Benin",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/bj.png"
    },
    {
        "name": "Botswana",
        "region": "Africa",
        "subregion": "Southern Africa",
        "flag": "https://flagcdn.com/w320/bw.png"
    },
    {
        "name": "Burkina Faso",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/bf.png"
    },
    {
        "name": "Burundi",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/bi.png"
    },
    {
        "name": "Cameroon",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/cm.png"
    },
    {
        "name": "Cape Verde",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/cv.png"
    },
    {
        "name": "Central African Republic",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/cf.png"
    },
    {
        "name": "Chad",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/td.png"
    },
    {
        "name": "Comoros",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/km.png"
    },
    {
        "name": "DR Congo",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/cd.png"
    },
    {
        "name": "Djibouti",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/dj.png"
    },
    {
        "name": "Egypt",
        "region": "Africa",
        "subregion": "Northern Africa",
        "flag": "https://flagcdn.com/w320/eg.png"
    },
    {
        "name": "Equatorial Guinea",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/gq.png"
    },
    {
        "name": "Eritrea",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/er.png"
    },
    {
        "name": "Eswatini",
        "region": "Africa",
        "subregion": "Southern Africa",
        "flag": "https://flagcdn.com/w320/sz.png"
    },
    {
        "name": "Ethiopia",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/et.png"
    },
    {
        "name": "Gabon",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/ga.png"
    },
    {
        "name": "Gambia",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/gm.png"
    },
    {
        "name": "Ghana",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/gh.png"
    },
    {
        "name": "Guinea",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/gn.png"
    },
    {
        "name": "Guinea-Bissau",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/gw.png"
    },
    {
        "name": "Ivory Coast",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/ci.png"
    },
    {
        "name": "Kenya",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/ke.png"
    },
    {
        "name": "Lesotho",
        "region": "Africa",
        "subregion": "Southern Africa",
        "flag": "https://flagcdn.com/w320/ls.png"
    },
    {
        "name": "Liberia",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/lr.png"
    },
    {
        "name": "Libya",
        "region": "Africa",
        "subregion": "Northern Africa",
        "flag": "https://flagcdn.com/w320/ly.png"
    },
    {
        "name": "Madagascar",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/mg.png"
    },
    {
        "name": "Malawi",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/mw.png"
    },
    {
        "name": "Mali",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/ml.png"
    },
    {
        "name": "Mauritania",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/mr.png"
    },
    {
        "name": "Morocco",
        "region": "Africa",
        "subregion": "Northern Africa",
        "flag": "https://flagcdn.com/w320/ma.png"
    },
    {
        "name": "Mozambique",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/mz.png"
    },
    {
        "name": "Namibia",
        "region": "Africa",
        "subregion": "Southern Africa",
        "flag": "https://flagcdn.com/w320/na.png"
    },
    {
        "name": "Niger",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/ne.png"
    },
    {
        "name": "Nigeria",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/ng.png"
    },
    {
        "name": "Republic of the Congo",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/cg.png"
    },
    {
        "name": "Rwanda",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/rw.png"
    },
    {
        "name": "Senegal",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/sn.png"
    },
    {
        "name": "Seychelles",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/sc.png"
    },
    {
        "name": "Sierra Leone",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/sl.png"
    },
    {
        "name": "Somalia",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/so.png"
    },
    {
        "name": "South Africa",
        "region": "Africa",
        "subregion": "Southern Africa",
        "flag": "https://flagcdn.com/w320/za.png"
    },
    {
        "name": "South Sudan",
        "region": "Africa",
        "subregion": "Middle Africa",
        "flag": "https://flagcdn.com/w320/ss.png"
    },
    {
        "name": "Sudan",
        "region": "Africa",
        "subregion": "Northern Africa",
        "flag": "https://flagcdn.com/w320/sd.png"
    },
    {
        "name": "Tanzania",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/tz.png"
    },
    {
        "name": "Togo",
        "region": "Africa",
        "subregion": "Western Africa",
        "flag": "https://flagcdn.com/w320/tg.png"
    },
    {
        "name": "Tunisia",
        "region": "Africa",
        "subregion": "Northern Africa",
        "flag": "https://flagcdn.com/w320/tn.png"
    },
    {
        "name": "Uganda",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/ug.png"
    },
    {
        "name": "Zambia",
        "region": "Africa",
        "subregion": "Eastern Africa",
        "flag": "https://flagcdn.com/w320/zm.png"
    },
    {
        "name": "Zimbabwe",
        "region": "Africa",
        "subregion": "Southern Africa",
        "flag": "https://flagcdn.com/w320/zw.png"
    },
    {
        "name": "Australia",
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "flag": "https://flagcdn.com/w320/au.png"
    },
    {
        "name": "Fiji",
        "region": "Oceania",
        "subregion": "Melanesia",
        "flag": "https://flagcdn.com/w320/fj.png"
    },
    {
        "name": "New Zealand",
        "region": "Oceania",
        "subregion": "Australia and New Zealand",
        "flag": "https://flagcdn.com/w320/nz.png"
    },
    {
        "name": "Papua New Guinea",
        "region": "Oceania",
        "subregion": "Melanesia",
        "flag": "https://flagcdn.com/w320/pg.png"
    },
    {
        "name": "Argentina",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/ar.png"
    },
    {
        "name": "Aruba",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/aw.png"
    },
    {
        "name": "Bahamas",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/bs.png"
    },
    {
        "name": "Bolivia",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/bo.png"
    },
    {
        "name": "Brazil",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/br.png"
    },
    {
        "name": "Canada",
        "region": "Americas",
        "subregion": "North America",
        "flag": "https://flagcdn.com/w320/ca.png"
    },
    {
        "name": "Chile",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/cl.png"
    },
    {
        "name": "Colombia",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/co.png"
    },
    {
        "name": "Costa Rica",
        "region": "Americas",
        "subregion": "Central America",
        "flag": "https://flagcdn.com/w320/cr.png"
    },
    {
        "name": "Cuba",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/cu.png"
    },
    {
        "name": "Dominican Republic",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/do.png"
    },
    {
        "name": "Ecuador",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/ec.png"
    },
    {
        "name": "El Salvador",
        "region": "Americas",
        "subregion": "Central America",
        "flag": "https://flagcdn.com/w320/sv.png"
    },
    {
        "name": "Greenland",
        "region": "Americas",
        "subregion": "North America",
        "flag": "https://flagcdn.com/w320/gl.png"
    },
    {
        "name": "Guadeloupe",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/gp.png"
    },
    {
        "name": "Guatemala",
        "region": "Americas",
        "subregion": "Central America",
        "flag": "https://flagcdn.com/w320/gt.png"
    },
    {
        "name": "Haiti",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/ht.png"
    },
    {
        "name": "Honduras",
        "region": "Americas",
        "subregion": "Central America",
        "flag": "https://flagcdn.com/w320/hn.png"
    },
    {
        "name": "Jamaica",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/jm.png"
    },
    {
        "name": "Mexico",
        "region": "Americas",
        "subregion": "North America",
        "flag": "https://flagcdn.com/w320/mx.png"
    },
    {
        "name": "Nicaragua",
        "region": "Americas",
        "subregion": "Central America",
        "flag": "https://flagcdn.com/w320/ni.png"
    },
    {
        "name": "Panama",
        "region": "Americas",
        "subregion": "Central America",
        "flag": "https://flagcdn.com/w320/pa.png"
    },
    {
        "name": "Paraguay",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/py.png"
    },
    {
        "name": "Peru",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/pe.png"
    },
    {
        "name": "Puerto Rico",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/pr.png"
    },
    {
        "name": "Suriname",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/sr.png"
    },
    {
        "name": "Trinidad and Tobago",
        "region": "Americas",
        "subregion": "Caribbean",
        "flag": "https://flagcdn.com/w320/tt.png"
    },
    {
        "name": "United States",
        "region": "Americas",
        "subregion": "North America",
        "flag": "https://flagcdn.com/w320/us.png"
    },
    {
        "name": "Uruguay",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/uy.png"
    },
    {
        "name": "Venezuela",
        "region": "Americas",
        "subregion": "South America",
        "flag": "https://flagcdn.com/w320/ve.png"
    },
    {
        "name": "Albania",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/al.png"
    },
    {
        "name": "Austria",
        "region": "Europe",
        "subregion": "Central Europe",
        "flag": "https://flagcdn.com/w320/at.png"
    },
    {
        "name": "Belarus",
        "region": "Europe",
        "subregion": "Eastern Europe",
        "flag": "https://flagcdn.com/w320/by.png"
    },
    {
        "name": "Belgium",
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://flagcdn.com/w320/be.png"
    },
    {
        "name": "Bosnia and Herzegovina",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/ba.png"
    },
    {
        "name": "Bulgaria",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/bg.png"
    },
    {
        "name": "Croatia",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/hr.png"
    },
    {
        "name": "Cyprus",
        "region": "Europe",
        "subregion": "Southern Europe",
        "flag": "https://flagcdn.com/w320/cy.png"
    },
    {
        "name": "Czechia",
        "region": "Europe",
        "subregion": "Central Europe",
        "flag": "https://flagcdn.com/w320/cz.png"
    },
    {
        "name": "Denmark",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/dk.png"
    },
    {
        "name": "Estonia",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/ee.png"
    },
    {
        "name": "Finland",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/fi.png"
    },
    {
        "name": "France",
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://flagcdn.com/w320/fr.png"
    },
    {
        "name": "Germany",
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://flagcdn.com/w320/de.png"
    },
    {
        "name": "Greece",
        "region": "Europe",
        "subregion": "Southern Europe",
        "flag": "https://flagcdn.com/w320/gr.png"
    },
    {
        "name": "Hungary",
        "region": "Europe",
        "subregion": "Central Europe",
        "flag": "https://flagcdn.com/w320/hu.png"
    },
    {
        "name": "Iceland",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/is.png"
    },
    {
        "name": "Ireland",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/ie.png"
    },
    {
        "name": "Italy",
        "region": "Europe",
        "subregion": "Southern Europe",
        "flag": "https://flagcdn.com/w320/it.png"
    },
    {
        "name": "Kosovo",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/xk.png"
    },
    {
        "name": "Latvia",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/lv.png"
    },
    {
        "name": "Liechtenstein",
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://flagcdn.com/w320/li.png"
    },
    {
        "name": "Lithuania",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/lt.png"
    },
    {
        "name": "Luxembourg",
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://flagcdn.com/w320/lu.png"
    },
    {
        "name": "Malta",
        "region": "Europe",
        "subregion": "Southern Europe",
        "flag": "https://flagcdn.com/w320/mt.png"
    },
    {
        "name": "Moldova",
        "region": "Europe",
        "subregion": "Eastern Europe",
        "flag": "https://flagcdn.com/w320/md.png"
    },
    {
        "name": "Monaco",
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://flagcdn.com/w320/mc.png"
    },
    {
        "name": "Montenegro",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/me.png"
    },
    {
        "name": "Montenegro",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/me.png"
    },
    {
        "name": "North Macedonia",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/mk.png"
    },
    {
        "name": "Norway",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/no.png"
    },
    {
        "name": "Poland",
        "region": "Europe",
        "subregion": "Central Europe",
        "flag": "https://flagcdn.com/w320/pl.png"
    },
    {
        "name": "Portugal",
        "region": "Europe",
        "subregion": "Southern Europe",
        "flag": "https://flagcdn.com/w320/pt.png"
    },
    {
        "name": "Romania",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/ro.png"
    },
    {
        "name": "Russia",
        "region": "Europe",
        "subregion": "Eastern Europe",
        "flag": "https://flagcdn.com/w320/ru.png"
    },
    {
        "name": "Serbia",
        "region": "Europe",
        "subregion": "Southeast Europe",
        "flag": "https://flagcdn.com/w320/rs.png"
    },
    {
        "name": "Slovakia",
        "region": "Europe",
        "subregion": "Central Europe",
        "flag": "https://flagcdn.com/w320/sk.png"
    },
    {
        "name": "Slovenia",
        "region": "Europe",
        "subregion": "Central Europe",
        "flag": "https://flagcdn.com/w320/si.png"
    },
    {
        "name": "Spain",
        "region": "Europe",
        "subregion": "Southern Europe",
        "flag": "https://flagcdn.com/w320/es.png"
    },
    {
        "name": "Sweden",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/se.png"
    },
    {
        "name": "Switzerland",
        "region": "Europe",
        "subregion": "Western Europe",
        "flag": "https://flagcdn.com/w320/ch.png"
    },
    {
        "name": "Ukraine",
        "region": "Europe",
        "subregion": "Eastern Europe",
        "flag": "https://flagcdn.com/w320/ua.png"
    },
    {
        "name": "United Kingdom",
        "region": "Europe",
        "subregion": "Northern Europe",
        "flag": "https://flagcdn.com/w320/gb.png"
    },
    {
        "name": "Afghanistan",
        "region": "Asia",
        "subregion": "Southern Asia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
    },
    {
        "name": "Armenia",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/am.png"
    },
    {
        "name": "Azerbaijan",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/az.png"
    },
    {
        "name": "Bahrain",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/bh.png"
    },
    {
        "name": "Bangladesh",
        "region": "Asia",
        "subregion": "Southern Asia",
        "flag": "https://flagcdn.com/w320/bd.png"
    },
    {
        "name": "Cambodia",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/kh.png"
    },
    {
        "name": "China",
        "region": "Asia",
        "subregion": "Eastern Asia",
        "flag": "https://flagcdn.com/w320/cn.png"
    },
    {
        "name": "Georgia",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/ge.png"
    },
    {
        "name": "Hong Kong",
        "region": "Asia",
        "subregion": "Eastern Asia",
        "flag": "https://flagcdn.com/w320/hk.png"
    },
    {
        "name": "India",
        "region": "Asia",
        "subregion": "Southern Asia",
        "flag": "https://flagcdn.com/w320/in.png"
    },
    {
        "name": "Indonesia",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/id.png"
    },
    {
        "name": "Iran",
        "region": "Asia",
        "subregion": "Southern Asia",
        "flag": "https://flagcdn.com/w320/ir.png"
    },
    {
        "name": "Iraq",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/iq.png"
    },
    {
        "name": "Israel",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/il.png"
    },
    {
        "name": "Japan",
        "region": "Asia",
        "subregion": "Eastern Asia",
        "flag": "https://flagcdn.com/w320/jp.png"
    },
    {
        "name": "Jordan",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/jo.png"
    },
    {
        "name": "Kazakhstan",
        "region": "Asia",
        "subregion": "Central Asia",
        "flag": "https://flagcdn.com/w320/kz.png"
    },
    {
        "name": "Kuwait",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/kw.png"
    },
    {
        "name": "Kyrgyzstan",
        "region": "Asia",
        "subregion": "Central Asia",
        "flag": "https://flagcdn.com/w320/kg.png"
    },
    {
        "name": "Laos",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/la.png"
    },
    {
        "name": "Lebanon",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/lb.png"
    },
    {
        "name": "Malaysia",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/my.png"
    },
    {
        "name": "Maldives",
        "region": "Asia",
        "subregion": "Southern Asia",
        "flag": "https://flagcdn.com/w320/mv.png"
    },
    {
        "name": "Mongolia",
        "region": "Asia",
        "subregion": "Eastern Asia",
        "flag": "https://flagcdn.com/w320/mn.png"
    },
    {
        "name": "Myanmar",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/mm.png"
    },
    {
        "name": "Nepal",
        "region": "Asia",
        "subregion": "Southern Asia",
        "flag": "https://flagcdn.com/w320/np.png"
    },
    {
        "name": "North Korea",
        "region": "Asia",
        "subregion": "Eastern Asia",
        "flag": "https://flagcdn.com/w320/kp.png"
    },
    {
        "name": "Oman",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/om.png"
    },
    {
        "name": "Pakistan",
        "region": "Asia",
        "subregion": "Southern Asia",
        "flag": "https://flagcdn.com/w320/pk.png"
    },
    {
        "name": "Palestine",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/ps.png"
    },
    {
        "name": "Philippines",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/ph.png"
    },
    {
        "name": "Qatar",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/qa.png"
    },
    {
        "name": "Saudi Arabia",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/sa.png"
    },
    {
        "name": "Singapore",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/sg.png"
    },
    {
        "name": "South Korea",
        "region": "Asia",
        "subregion": "Eastern Asia",
        "flag": "https://flagcdn.com/w320/kr.png"
    },
    {
        "name": "Sri Lanka",
        "region": "Asia",
        "subregion": "Southern Asia",
        "flag": "https://flagcdn.com/w320/lk.png"
    },
    {
        "name": "Syria",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/sy.png"
    },
    {
        "name": "Taiwan",
        "region": "Asia",
        "subregion": "Eastern Asia",
        "flag": "https://flagcdn.com/w320/tw.png"
    },
    {
        "name": "Tajikistan",
        "region": "Asia",
        "subregion": "Central Asia",
        "flag": "https://flagcdn.com/w320/tj.png"
    },
    {
        "name": "Thailand",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/th.png"
    },
    {
        "name": "Turkey",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/tr.png"
    },
    {
        "name": "Turkmenistan",
        "region": "Asia",
        "subregion": "Central Asia",
        "flag": "https://flagcdn.com/w320/tm.png"
    },
    {
        "name": "United Arab Emirates",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/ae.png"
    },
    {
        "name": "Uzbekistan",
        "region": "Asia",
        "subregion": "Central Asia",
        "flag": "https://flagcdn.com/w320/uz.png"
    },
    {
        "name": "Vietnam",
        "region": "Asia",
        "subregion": "South-Eastern Asia",
        "flag": "https://flagcdn.com/w320/vn.png"
    },
    {
        "name": "Yemen",
        "region": "Asia",
        "subregion": "Western Asia",
        "flag": "https://flagcdn.com/w320/ye.png"
    }
];

export default countries;