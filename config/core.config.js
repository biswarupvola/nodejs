var ConfigObj = {}
const environment = require('./environment.config')

Object.defineProperties(ConfigObj, {
    port: {
        value: !environment.production ? process.env.PORT ? process.env.PORT : 3001 : 4000,
        writable: false
    },
    isProduction:{
        value:environment.production
    },
    dburi: {
        value: environment.production ? '' : 'localhost'
    },
    dbusername: {
        value: environment.production ? '' : 'root'
    },
    dbpassword: {
        value: environment.production ? '' : ''
    },
    dbname: {
        value: environment.production ? '' : 'ABCD'
    },
    email:{
        value:{
            service:"gmail",
            user: environment.production? "": "biswarup.chakraborty@gmail.com",
            pass:"",
            from:"biswarup.chakraborty@gmail.com"
        }
    },
    jwt_secret: {
        value: environment.production ? '' : 'gintejsuja-745hjd8ddjd-fkfurhd5xdh-fjfucjcj'
    },
    fromObject : {
        value: {
            personalInfo:{
              firstName: "",
              lastName: "",
              email:"",
              phoneNumber:"",
            },
            ProfessionalInfo:{
              gitLink:"",
              liveInUS:false,
              resumeLink:"",
              coverLink:"",
              aboutYou:""
            }
          },
          writable: false
    }
});

//making object noneditable
Object.seal(ConfigObj)

module.exports = ConfigObj