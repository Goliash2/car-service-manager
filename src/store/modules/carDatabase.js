export default {
    state() {
        return {
            service: [
                {
                    id: "service1",
                    car: {
                        SPZ: "4A3 58E8",
                        model: "Renault Talisman",
                        photos: [
                            {
                                name: "ze predu",
                                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Frontansicht_Renault_Talisman_Grandtour.jpg/1024px-Frontansicht_Renault_Talisman_Grandtour.jpg"
                            }
                        ]
                    },
                    serviceCreated: "timestamp...",
                    serviceStatus: "done",
                    description: "Vyměněna kola, provedeno plnění klimatizace"
                },
                {
                    id: "service2",
                    car: {
                        SPZ: "5S9 65C1",
                        model: "Škoda Octavia Combi",
                        photos: [
                            {
                                name: "ze predu",
                                url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Skoda_Octavia_Combi_rear_20071125.jpg"
                            }
                        ]
                    },
                    serviceCreated: "timestamp...",
                    serviceStatus: "service",
                    description: "Nefunkční zadní stěrač, výměna brzdových destiček"
                },
                {
                    id: "service3",
                    car: {
                        SPZ: "9A3 2189",
                        model: "Škoda Roomster",
                        photos: [
                            {
                                name: "ze predu",
                                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Skoda_Roomster_rear_20080612.jpg/1280px-Skoda_Roomster_rear_20080612.jpg"
                            }
                        ]
                    },
                    serviceCreated: "timestamp...",
                    serviceStatus: "waiting",
                    description: "Čištění interiéru"
                },
                {
                    id: "service4",
                    car: {
                        SPZ: "7E4 8567",
                        model: "VW Golf 7",
                        photos: [
                            {
                                name: "ze predu",
                                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/VW_Golf_7_Blue_%2811049760544%29.jpg/1920px-VW_Golf_7_Blue_%2811049760544%29.jpg"
                            }
                        ]
                    },
                    serviceCreated: "timestamp...",
                    serviceStatus: "waiting",
                    description: "Nesvítí pravý blinkr vzadu, kontrola elektroniky"
                }
            ]
        }
    },
    getters: {
        service(state) {
            return state.service;
        }
    }
}