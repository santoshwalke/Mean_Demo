export class Ride {
    // tslint:disable-next-line:variable-name
    constructor(public _id: string, public rideId: number, public rideName: string, public rideeName: string,
                public pickUp: string, public destination: string, public status: string ) {
            this._id = _id;
            this.status = status;
            this.rideId = rideId;
            this.rideName = rideName;
            this.rideeName = rideeName;
            this.pickUp = pickUp;
            this.destination = destination;
        }
}
