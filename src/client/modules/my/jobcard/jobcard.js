import LightningElementWithBootstrap from "../../lib/lightningElementWithBootstrap";
import { api } from 'lwc'
import {dateFormatter} from '../../utils/utils'
export default class Jobcard extends LightningElementWithBootstrap {
    @api job = {}

    get formattedDate() {
        return dateFormatter(this.job.created_at)
    }

    viewDetailHandler() {
        this.dispatchEvent(new CustomEvent('selected', {
            detail:this.job
        }))
    }
}
