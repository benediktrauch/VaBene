import {Injectable} from '@angular/core';

/*
  Generated class for the DataExchangeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataExchangeProvider {

  searchResults: any;
  selectedConnection: any;

  constructor() {
  }

  setSelectedConnection(index: number) {
    this.selectedConnection = this.getConnectionSearchResults()[index];
  }

  getSelectedConnection() {
    return this.selectedConnection;
  }

  setConnectionSearchResults(connection) {
    this.searchResults = connection;
  }

  getConnectionSearchResults() {
    if (this.searchResults) {
      return this.searchResults;
    } else {
      return [{"type":"journey","legs":[{"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":"2018-05-23T12:27:00.000+02:00","arrival":"2018-05-23T12:37:00.000+02:00","departureDelay":240,"arrivalDelay":180,"id":"1|33216|15|86|23052018","line":{"type":"line","id":"s9","name":"S9","public":true,"class":1,"productCode":0,"operator":{"type":"operator","id":"s-bahn-berlin-gmbh","name":"S-Bahn Berlin GmbH"},"product":"suburban","mode":"train","symbol":"S","nr":9,"metro":false,"express":false,"night":false},"direction":"S Flughafen Berlin-Schönefeld","departurePlatform":"15","arrivalPlatform":"8","passed":[{"station":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":"2018-05-23T12:23:00.000+02:00","departure":"2018-05-23T12:27:00.000+02:00"},{"station":{"type":"station","id":"900000100001","name":"S+U Friedrichstr.","location":{"type":"location","latitude":52.520268,"longitude":13.387149},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":"2018-05-23T12:29:00.000+02:00","departure":"2018-05-23T12:30:00.000+02:00"},{"station":{"type":"station","id":"900000100002","name":"S Hackescher Markt","location":{"type":"location","latitude":52.522605,"longitude":13.402359},"products":{"suburban":true,"subway":false,"tram":true,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":"2018-05-23T12:31:00.000+02:00","departure":"2018-05-23T12:32:00.000+02:00"},{"station":{"type":"station","id":"900000100003","name":"S+U Alexanderplatz","location":{"type":"location","latitude":52.521508,"longitude":13.411267},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":"2018-05-23T12:33:00.000+02:00","departure":"2018-05-23T12:33:00.000+02:00"},{"station":{"type":"station","id":"900000100004","name":"S+U Jannowitzbrücke","location":{"type":"location","latitude":52.515503,"longitude":13.418027},"products":{"suburban":true,"subway":true,"tram":false,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":"2018-05-23T12:35:00.000+02:00","departure":"2018-05-23T12:35:00.000+02:00"},{"station":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":"2018-05-23T12:37:00.000+02:00","departure":"2018-05-23T12:34:00.000+02:00"}],"cycle":{"min":120,"max":360}}],"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":"2018-05-23T12:27:00.000+02:00","arrival":"2018-05-23T12:37:00.000+02:00"},{"type":"journey","legs":[{"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":"2018-05-23T12:29:00.000+02:00","arrival":"2018-05-23T12:39:00.000+02:00","departureDelay":60,"arrivalDelay":0,"id":"1|32643|17|86|23052018","line":{"type":"line","id":"s7","name":"S7","public":true,"class":1,"productCode":0,"operator":{"type":"operator","id":"s-bahn-berlin-gmbh","name":"S-Bahn Berlin GmbH"},"product":"suburban","mode":"train","symbol":"S","nr":7,"metro":false,"express":false,"night":false},"direction":"S Ahrensfelde","departurePlatform":"15","arrivalPlatform":"8","passed":[{"station":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":"2018-05-23T12:28:00.000+02:00","departure":"2018-05-23T12:29:00.000+02:00"},{"station":{"type":"station","id":"900000100001","name":"S+U Friedrichstr.","location":{"type":"location","latitude":52.520268,"longitude":13.387149},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":"2018-05-23T12:31:00.000+02:00","departure":"2018-05-23T12:32:00.000+02:00"},{"station":{"type":"station","id":"900000100002","name":"S Hackescher Markt","location":{"type":"location","latitude":52.522605,"longitude":13.402359},"products":{"suburban":true,"subway":false,"tram":true,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":"2018-05-23T12:34:00.000+02:00","departure":"2018-05-23T12:34:00.000+02:00"},{"station":{"type":"station","id":"900000100003","name":"S+U Alexanderplatz","location":{"type":"location","latitude":52.521508,"longitude":13.411267},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":"2018-05-23T12:35:00.000+02:00","departure":"2018-05-23T12:35:00.000+02:00"},{"station":{"type":"station","id":"900000100004","name":"S+U Jannowitzbrücke","location":{"type":"location","latitude":52.515503,"longitude":13.418027},"products":{"suburban":true,"subway":true,"tram":false,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":"2018-05-23T12:36:00.000+02:00","departure":"2018-05-23T12:37:00.000+02:00"},{"station":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":"2018-05-23T12:39:00.000+02:00","departure":"2018-05-23T12:39:00.000+02:00"}],"cycle":{"min":120,"max":360}}],"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":"2018-05-23T12:29:00.000+02:00","arrival":"2018-05-23T12:39:00.000+02:00"},{"type":"journey","legs":[{"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":null,"arrival":null,"id":"1|32384|1|86|23052018","line":{"type":"line","id":"s5","name":"S5","public":true,"class":1,"productCode":0,"operator":{"type":"operator","id":"s-bahn-berlin-gmbh","name":"S-Bahn Berlin GmbH"},"product":"suburban","mode":"train","symbol":"S","nr":5,"metro":false,"express":false,"night":false},"direction":"S Hoppegarten","passed":[{"station":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":null,"departure":null,"cancelled":true,"arrivalDelay":null,"formerScheduledArrival":"2018-05-23T12:30:00.000+02:00","departureDelay":null,"formerScheduledDeparture":"2018-05-23T12:31:00.000+02:00"},{"station":{"type":"station","id":"900000100001","name":"S+U Friedrichstr.","location":{"type":"location","latitude":52.520268,"longitude":13.387149},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":null,"departure":null,"cancelled":true,"arrivalDelay":null,"formerScheduledArrival":"2018-05-23T12:33:00.000+02:00","departureDelay":null,"formerScheduledDeparture":"2018-05-23T12:33:00.000+02:00"},{"station":{"type":"station","id":"900000100002","name":"S Hackescher Markt","location":{"type":"location","latitude":52.522605,"longitude":13.402359},"products":{"suburban":true,"subway":false,"tram":true,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":null,"departure":null,"cancelled":true,"arrivalDelay":null,"formerScheduledArrival":"2018-05-23T12:35:00.000+02:00","departureDelay":null,"formerScheduledDeparture":"2018-05-23T12:35:00.000+02:00"},{"station":{"type":"station","id":"900000100003","name":"S+U Alexanderplatz","location":{"type":"location","latitude":52.521508,"longitude":13.411267},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":null,"departure":null,"cancelled":true,"arrivalDelay":null,"formerScheduledArrival":"2018-05-23T12:37:00.000+02:00","departureDelay":null,"formerScheduledDeparture":"2018-05-23T12:37:00.000+02:00"},{"station":{"type":"station","id":"900000100004","name":"S+U Jannowitzbrücke","location":{"type":"location","latitude":52.515503,"longitude":13.418027},"products":{"suburban":true,"subway":true,"tram":false,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":null,"departure":null,"cancelled":true,"arrivalDelay":null,"formerScheduledArrival":"2018-05-23T12:39:00.000+02:00","departureDelay":null,"formerScheduledDeparture":"2018-05-23T12:39:00.000+02:00"},{"station":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":null,"departure":null,"cancelled":true,"arrivalDelay":null,"formerScheduledArrival":"2018-05-23T12:41:00.000+02:00","departureDelay":null,"formerScheduledDeparture":"2018-05-23T12:42:00.000+02:00"}],"cycle":{"min":120,"max":300},"cancelled":true,"arrivalDelay":null,"arrivalPlatform":null,"formerScheduledArrival":"2018-05-23T12:41:00.000+02:00","departureDelay":null,"departurePlatform":null,"formerScheduledDeparture":"2018-05-23T12:31:00.000+02:00"}],"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":null,"arrival":null,"cancelled":true,"formerScheduledDeparture":"2018-05-23T12:31:00.000+02:00","formerScheduledArrival":"2018-05-23T12:41:00.000+02:00"},{"type":"journey","legs":[{"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":"2018-05-23T12:34:00.000+02:00","arrival":"2018-05-23T12:44:00.000+02:00","departureDelay":0,"arrivalDelay":0,"id":"1|31606|2|86|23052018","line":{"type":"line","id":"s3","name":"S3","public":true,"class":1,"productCode":0,"operator":{"type":"operator","id":"s-bahn-berlin-gmbh","name":"S-Bahn Berlin GmbH"},"product":"suburban","mode":"train","symbol":"S","nr":3,"metro":false,"express":false,"night":false},"direction":"S Erkner","departurePlatform":"15","arrivalPlatform":"8","passed":[{"station":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":"2018-05-23T12:33:00.000+02:00","departure":"2018-05-23T12:34:00.000+02:00"},{"station":{"type":"station","id":"900000100001","name":"S+U Friedrichstr.","location":{"type":"location","latitude":52.520268,"longitude":13.387149},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":"2018-05-23T12:36:00.000+02:00","departure":"2018-05-23T12:36:00.000+02:00"},{"station":{"type":"station","id":"900000100002","name":"S Hackescher Markt","location":{"type":"location","latitude":52.522605,"longitude":13.402359},"products":{"suburban":true,"subway":false,"tram":true,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":"2018-05-23T12:38:00.000+02:00","departure":"2018-05-23T12:38:00.000+02:00"},{"station":{"type":"station","id":"900000100003","name":"S+U Alexanderplatz","location":{"type":"location","latitude":52.521508,"longitude":13.411267},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":"2018-05-23T12:40:00.000+02:00","departure":"2018-05-23T12:40:00.000+02:00"},{"station":{"type":"station","id":"900000100004","name":"S+U Jannowitzbrücke","location":{"type":"location","latitude":52.515503,"longitude":13.418027},"products":{"suburban":true,"subway":true,"tram":false,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":"2018-05-23T12:42:00.000+02:00","departure":"2018-05-23T12:42:00.000+02:00"},{"station":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":"2018-05-23T12:44:00.000+02:00","departure":"2018-05-23T12:47:00.000+02:00"}],"cycle":{"min":120,"max":300}}],"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":"2018-05-23T12:34:00.000+02:00","arrival":"2018-05-23T12:44:00.000+02:00"},{"type":"journey","legs":[{"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":"2018-05-23T12:38:00.000+02:00","arrival":"2018-05-23T12:49:00.000+02:00","departureDelay":0,"arrivalDelay":0,"id":"1|32643|18|86|23052018","line":{"type":"line","id":"s7","name":"S7","public":true,"class":1,"productCode":0,"operator":{"type":"operator","id":"s-bahn-berlin-gmbh","name":"S-Bahn Berlin GmbH"},"product":"suburban","mode":"train","symbol":"S","nr":7,"metro":false,"express":false,"night":false},"direction":"S Ahrensfelde","departurePlatform":"15","arrivalPlatform":"8","passed":[{"station":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":"2018-05-23T12:38:00.000+02:00","departure":"2018-05-23T12:38:00.000+02:00"},{"station":{"type":"station","id":"900000100001","name":"S+U Friedrichstr.","location":{"type":"location","latitude":52.520268,"longitude":13.387149},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":"2018-05-23T12:40:00.000+02:00","departure":"2018-05-23T12:41:00.000+02:00"},{"station":{"type":"station","id":"900000100002","name":"S Hackescher Markt","location":{"type":"location","latitude":52.522605,"longitude":13.402359},"products":{"suburban":true,"subway":false,"tram":true,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":"2018-05-23T12:42:00.000+02:00","departure":"2018-05-23T12:43:00.000+02:00"},{"station":{"type":"station","id":"900000100003","name":"S+U Alexanderplatz","location":{"type":"location","latitude":52.521508,"longitude":13.411267},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":false,"regional":true}},"arrival":"2018-05-23T12:44:00.000+02:00","departure":"2018-05-23T12:45:00.000+02:00"},{"station":{"type":"station","id":"900000100004","name":"S+U Jannowitzbrücke","location":{"type":"location","latitude":52.515503,"longitude":13.418027},"products":{"suburban":true,"subway":true,"tram":false,"bus":true,"ferry":false,"express":false,"regional":false}},"arrival":"2018-05-23T12:46:00.000+02:00","departure":"2018-05-23T12:47:00.000+02:00"},{"station":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"arrival":"2018-05-23T12:49:00.000+02:00","departure":"2018-05-23T12:49:00.000+02:00"}],"cycle":{"min":120,"max":300}}],"origin":{"type":"station","id":"900000003201","name":"S+U Berlin Hauptbahnhof","location":{"type":"location","latitude":52.52585,"longitude":13.368928},"products":{"suburban":true,"subway":true,"tram":true,"bus":true,"ferry":false,"express":true,"regional":true}},"destination":{"type":"station","id":"900000120005","name":"S Ostbahnhof","location":{"type":"location","latitude":52.510002,"longitude":13.435745},"products":{"suburban":true,"subway":false,"tram":false,"bus":true,"ferry":false,"express":true,"regional":true}},"departure":"2018-05-23T12:38:00.000+02:00","arrival":"2018-05-23T12:49:00.000+02:00"}]
  }
  }
}
