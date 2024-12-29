import background from "./IMG/background.png";
import company1 from "./IMG/company1.png";
import company2 from "./IMG/company2.png";
import company3 from "./IMG/company3.png";
import company4 from "./IMG/company4.png";
import company5 from "./IMG/company5.png";
import job1 from "./IMG/slack.png";

let companyLogos = [
    {
        id: 1,
        name: "Company 1",
        logo: company1,
    },
    {
        id: 2,
        name: "Company 2",
        logo: company2,
    },
    {
        id: 3,
        name: "Company 3",
        logo: company3,
    },
    {
        id: 4,
        name: "Company 4",
        logo: company4,
    },
    {
        id: 5,
        name: "Company 5",
        logo: company5,
    },
];
let images = {
    background,
    job1,
};

let jobCategories = [
    "Software Development",
    "Data Science",
    "Product Management",
    "Marketing",
    "Sales",
    "Project Management",
    "Research and Development",
    "Training and Development",
    "Web Development",
];
let jobLocations = [
    "karachi",
    "lahore",
    "islamabad",
    "peshawar",
    "quetta",
    "multan",
    "faisalabad",
];
let jobListings = [
    {
        _id: '1',
        title: "Software Developer",
        location: "karachi",
        level: "Entry Level",
        category: "Software Development",
        companyId: {
            "_id": "1",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    },
    {
        _id: '2',
        title: "Software Developer",
        location: "lahore",
        level: "Internship",
        category: "Software Engineer",
        companyId: {
            "_id": "2",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 10000,
        date: 1729681667114,
    },
    {
        _id: '3',
        title: "Data Scientist",
        location: "lahore",
        level: "Senior",
        category: "Data Science",
        companyId: {
            "_id": "3",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    },
    {
        _id: '4',
        title: "Product Manager",
        location: "islamabad",
        level: "Entry Level",
        category: "Product Management",
        companyId: {
            "_id": "4",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 130000,
        date: 1729681667114,
    },
    {
        _id: '5',
        title: "Marketing Manager",
        location: "karachi",
        level: "Mid Level",
        category: "Marketing",
        companyId: {
            "_id": "5",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '6',
        title: "Sales Manager",
        location: "peshawar",
        level: "Mid Level",
        category: "Sales",
        companyId: {
            "_id": "6",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '7',
        title: "Project Manager",
        location: "faisalabad",
        level: "Junior",
        category: "Project Management",
        companyId: {
            "_id": "7",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '8',
        title: "Research and Development",
        location: "multan",
        level: "Mid Level",
        category: "Research and Development",
        companyId: {
            "_id": "8",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '9',
        title: "Training and Development",
        location: "quetta",
        level: "Senior",
        category: "Training and Development",
        companyId: {
            "_id": "9",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '10',
        title: "Web Developer",
        location: "Karachi",
        level: "Entry Level",
        category: "Web Development",
        companyId: {
            "_id": "10",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    },
    {
        _id: '1',
        title: "Software Developer",
        location: "Karachi",
        level: "Mid Level",
        category: "Software Development",
        companyId: {
            "_id": "1",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    },
    {
        _id: '2',
        title: "Software Developer",
        location: "Lahore",
        level: "Internship",
        category: "Software Engineer",
        companyId: {
            "_id": "2",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 10000,
        date: 1729681667114,
    },
    {
        _id: '3',
        title: "Data Scientist",
        location: "Lahore",
        level: "Senior",
        category: "Data Science",
        companyId: {
            "_id": "3",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    },
    {
        _id: '4',
        title: "Product Manager",
        location: "Islamabad",
        level: "Entry Level",
        category: "Product Management",
        companyId: {
            "_id": "4",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 130000,
        date: 1729681667114,
    },
    {
        _id: '5',
        title: "Marketing Manager",
        location: "Karachi",
        level: "Mid Level",
        category: "Marketing",
        companyId: {
            "_id": "5",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '6',
        title: "Sales Manager",
        location: "faisalabad",
        level: "Junior",
        category: "Sales",
        companyId: {
            "_id": "6",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '7',
        title: "Project Manager",
        location: "Karachi",
        level: "Mid Level",
        category: "Project Management",
        companyId: {
            "_id": "7",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '8',
        title: "Research and Development",
        location: "Karachi",
        level: "Mid Level",
        category: "Research and Development",
        companyId: {
            "_id": "8",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '9',
        title: "Training and Development",
        location: "Karachi",
        level: "Mid Level",
        category: "Training and Development",
        companyId: {
            "_id": "9",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }, {
        _id: '10',
        title: "Web Developer",
        location: "Karachi",
        level: "Entry Level",
        category: "Web Development",
        companyId: {
            "_id": "10",
            "name": "Softech",
            "email": "softech@gmail.com",
            "logo": company1,
        },
        description: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <h2><strong>key responsibilities</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        <h2><strong>skills required</strong></h2>
        <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
        </ol>
        `,
        salary: 100000,
        date: 1729681667114,
    }
];
export { images, companyLogos, jobCategories, jobLocations, jobListings };
