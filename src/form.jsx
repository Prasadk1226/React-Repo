import React from "react";
import "./form.css";

function formpage(){
    return(<>
    <body>

<h2 className="form-title">Job Application Form</h2>
<form action="/submit" method="POST">
    <table>
        <tr>
            <th colspan="2">Personal Information</th>
        </tr>
        <tr>
            <td>Full Name</td>
            <td><input type="text" name="full_name" required /> </td>
        </tr>
        <tr>
            <td>Date of Birth</td>
            <td><input type="date" name="dob" required /></td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>
                <input type="radio" name="gender" value="Male" required /> Male
                <input type="radio" name="gender" value="Female" required /> Female
                <input type="radio" name="gender" value="Other" required /> Other
            </td>
        </tr>
        <tr>
            <td>Address</td>
            <td><textarea name="address" rows="3" required></textarea></td>
        </tr>
    </table>

    <table>
        <tr>
            <th colspan="2">Contact Information</th>
        </tr>
        <tr>
            <td>Email</td>
            <td><input type="email" name="email" required/></td>
        </tr>
        <tr>
            <td>Phone Number</td>
            <td><input type="tel" name="phone" required /></td>
        </tr>
    </table>

    <table>
        <tr>
            <th colspan="2">Educational Details</th>
        </tr>
        <tr>
            <td>Highest Qualification</td>
            <td><input type="text" name="qualification" required /></td>
        </tr>
        <tr>
            <td>College/University</td>
            <td><input type="text" name="institution" required/></td>
        </tr>
        <tr>
            <td>Year of Graduation</td>
            <td><input type="number" name="graduation_year" min={2020} max={2025} required/></td>
        </tr>
    </table>

    <table>
        <tr>
            <th colspan="2">Professional Details</th>
        </tr>
        <tr>
            <td>Previous Job Role</td>
            <td><input type="text" name="previous_role"/></td>
        </tr>
        <tr>
            <td>Experience (Years)</td>
            <td><input type="number" name="experience" step="0.1"/></td>
        </tr>
        <tr>
            <td>Key Skills</td>
            <td><textarea name="skills" rows="3" required></textarea></td>
        </tr>
    </table>

    <button type="submit" className="submit-btn">Submit Application</button>
</form>

</body>
    </>)
}
export default formpage;

