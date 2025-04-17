import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ColumnCustomizationComponent extends Component {
    columns = [
        "profileImage",
        "name",
        "rollNumber",
        "department",
        "enrollmentYear",
        "dob",
        "gender",
        "address"
    ]
}