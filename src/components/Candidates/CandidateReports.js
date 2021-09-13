import React from "react";

import { formatDate } from "../../utils/helperFunctions";

export default function CandidateReports() {

    const array = [
        {
            "id": 84454293,
            "candidateId": 56479186,
            "candidateName": "Declan Schaden",
            "companyId": 73143881,
            "companyName": "Google",
            "interviewDate": "Sun Aug 29 2021 09:55:42 GMT+0200 (Central European Summer Time)",
            "phase": "quisquam",
            "status": "magni",
            "note": "Incidunt in commodi aliquid tenetur architecto excepturi cupiditate. Id quibusdam quibusdam dolorem incidunt. Harum consequuntur rerum libero impedit. Quia omnis amet explicabo pariatur. Qui excepturi molestiae suscipit officia eius corrupti."
        },
        {
            "id": 70203255,
            "candidateId": 54493806,
            "candidateName": "Tiffany Lynch",
            "companyId": 73143881,
            "companyName": "Google",
            "interviewDate": "Sat Aug 28 2021 14:14:51 GMT+0200 (Central European Summer Time)",
            "phase": "omnis",
            "status": "aliquid",
            "note": "Et suscipit consequatur neque modi placeat. Est aperiam sed quibusdam. Excepturi facere quam architecto nobis aspernatur dignissimos sequi laboriosam. Iste quia quidem reiciendis quis perferendis doloremque."
        },
        {
            "id": 26408026,
            "candidateId": 84705028,
            "candidateName": "Cade Hammes",
            "companyId": 73143881,
            "companyName": "Google",
            "interviewDate": "Sun Aug 29 2021 05:19:07 GMT+0200 (Central European Summer Time)",
            "phase": "quaerat",
            "status": "omnis",
            "note": "Eius numquam sit cupiditate quis nisi quia tempora qui. Animi necessitatibus voluptas dolore veritatis atque rerum architecto. Est aut et inventore qui aut corporis voluptatibus qui hic. Blanditiis sed sed sit. Et voluptates ratione eveniet quas."
        },
        {
            "id": 59762866,
            "candidateId": 84852310,
            "candidateName": "Rosalyn Batz DDS",
            "companyId": 73143881,
            "companyName": "Google",
            "interviewDate": "Sat Aug 28 2021 13:26:56 GMT+0200 (Central European Summer Time)",
            "phase": "sequi",
            "status": "laborum",
            "note": "Iure voluptas eum eum dolor. Sed consequuntur temporibus odit iure animi. Totam est quae aut amet harum officia nam. Itaque dolores quo nihil praesentium dolorum reiciendis exercitationem."
        },
        {
            "id": 16583844,
            "candidateId": 56479186,
            "candidateName": "Declan Schaden",
            "companyId": 8458231,
            "companyName": "Facebook",
            "interviewDate": "Sun Aug 29 2021 07:53:06 GMT+0200 (Central European Summer Time)",
            "phase": "omnis",
            "status": "non",
            "note": "Eveniet rerum magnam accusantium veniam eligendi recusandae et. Molestiae voluptatum enim neque quia. Dolores aperiam quia consequatur ut similique. Natus accusamus qui qui cum. Vero et consequatur provident molestiae dolores. Itaque nesciunt sint tenetur sed rerum aut est consequatur aliquid."
        },
        {
            "id": 31297837,
            "candidateId": 54493806,
            "candidateName": "Tiffany Lynch",
            "companyId": 8458231,
            "companyName": "Facebook",
            "interviewDate": "Sun Aug 29 2021 07:15:32 GMT+0200 (Central European Summer Time)",
            "phase": "dolorum",
            "status": "et",
            "note": "Ipsa tempore alias. Iste tenetur est dolor aliquid exercitationem dolor placeat ipsum sequi. Repellendus fugit libero."
        },
        {
            "id": 53162279,
            "candidateId": 84705028,
            "candidateName": "Cade Hammes",
            "companyId": 8458231,
            "companyName": "Facebook",
            "interviewDate": "Sat Aug 28 2021 18:50:44 GMT+0200 (Central European Summer Time)",
            "phase": "non",
            "status": "reprehenderit",
            "note": "Ullam deleniti voluptas voluptatem vel hic recusandae quis. Neque odit architecto. Dolore maiores aut sunt ducimus rerum voluptates et aliquam eius. In minus maiores eius beatae ab iure consectetur nihil est."
        },
        {
            "id": 80017320,
            "candidateId": 57835921,
            "candidateName": "Aisha Dare",
            "companyId": 8458231,
            "companyName": "Facebook",
            "interviewDate": "Sun Aug 29 2021 03:57:58 GMT+0200 (Central European Summer Time)",
            "phase": "dolores",
            "status": "ut",
            "note": "Et perspiciatis qui ea. Nihil eum neque ut est quam amet unde cum accusamus. Non aliquid quia sit voluptatem. Fugiat cumque nemo. Eum facere natus ullam sint quisquam."
        },
        {
            "id": 58259803,
            "candidateId": 56479186,
            "candidateName": "Declan Schaden",
            "companyId": 10149693,
            "companyName": "Microsoft",
            "interviewDate": "Sat Aug 28 2021 12:46:14 GMT+0200 (Central European Summer Time)",
            "phase": "ipsum",
            "status": "neque",
            "note": "Ut quae animi et consequatur magni. Iure molestias beatae. Quo quia et dolorem eaque quaerat non."
        },
        {
            "id": 13298263,
            "candidateId": 54493806,
            "candidateName": "Tiffany Lynch",
            "companyId": 10149693,
            "companyName": "Microsoft",
            "interviewDate": "Sun Aug 29 2021 00:45:19 GMT+0200 (Central European Summer Time)",
            "phase": "et",
            "status": "facilis",
            "note": "Perferendis at quaerat vitae. Voluptates aut atque blanditiis vero voluptas. Consequatur et magnam laboriosam consequatur rem blanditiis officiis et. Recusandae non sequi a asperiores minus. Est nemo est sapiente libero odio voluptas inventore totam omnis."
        },
        {
            "id": 79917486,
            "candidateId": 84705028,
            "candidateName": "Cade Hammes",
            "companyId": 10149693,
            "companyName": "Microsoft",
            "interviewDate": "Sat Aug 28 2021 11:20:44 GMT+0200 (Central European Summer Time)",
            "phase": "quas",
            "status": "perspiciatis",
            "note": "Nam alias saepe. Tempora magni assumenda corrupti eos ex. Et recusandae et sed architecto. Repellat blanditiis deleniti commodi aliquid necessitatibus cum sint."
        },
        {
            "id": 70314028,
            "candidateId": 84852310,
            "candidateName": "Rosalyn Batz DDS",
            "companyId": 10149693,
            "companyName": "Microsoft",
            "interviewDate": "Sat Aug 28 2021 22:18:39 GMT+0200 (Central European Summer Time)",
            "phase": "occaecati",
            "status": "alias",
            "note": "Et cum aut eum eos ut vel in non. Vel accusantium quia harum voluptatem quia iure totam voluptatem. Sequi exercitationem est unde aut unde nisi sed. Excepturi id unde beatae est laborum consequatur fuga."
        },
        {
            "id": 73533166,
            "candidateId": 56479186,
            "candidateName": "Declan Schaden",
            "companyId": 74578008,
            "companyName": "Tesla",
            "interviewDate": "Sat Aug 28 2021 16:34:09 GMT+0200 (Central European Summer Time)",
            "phase": "numquam",
            "status": "reprehenderit",
            "note": "Earum et ut. Doloribus et officiis totam qui quia omnis. Voluptatum saepe fugit quia nihil sed. Dolor ab et impedit. Omnis sequi distinctio provident cupiditate beatae est. Excepturi qui quibusdam rerum assumenda autem."
        },
        {
            "id": 16486267,
            "candidateId": 54493806,
            "candidateName": "Tiffany Lynch",
            "companyId": 74578008,
            "companyName": "Tesla",
            "interviewDate": "Sat Aug 28 2021 16:59:54 GMT+0200 (Central European Summer Time)",
            "phase": "laborum",
            "status": "laborum",
            "note": "Autem quod magnam commodi reiciendis natus harum. Non ipsa nostrum quas tempora voluptas fugit ab eveniet. Dolores nostrum id aut cumque iure. Omnis quos quia sit adipisci porro nobis accusamus. Tempora quas quia nihil natus quod. Cum in repudiandae ea numquam non maxime debitis libero ea."
        },
        {
            "id": 19288593,
            "candidateId": 84705028,
            "candidateName": "Cade Hammes",
            "companyId": 74578008,
            "companyName": "Tesla",
            "interviewDate": "Sun Aug 29 2021 05:13:18 GMT+0200 (Central European Summer Time)",
            "phase": "mollitia",
            "status": "sit",
            "note": "Distinctio exercitationem magnam voluptatibus. Beatae expedita porro deleniti quia temporibus eos odio. Facere ut labore. Doloribus sint ut alias voluptas doloremque corporis incidunt."
        },
        {
            "id": 9667556,
            "candidateId": 57835921,
            "candidateName": "Aisha Dare",
            "companyId": 74578008,
            "companyName": "Tesla",
            "interviewDate": "Sat Aug 28 2021 13:20:42 GMT+0200 (Central European Summer Time)",
            "phase": "rerum",
            "status": "dolore",
            "note": "Nisi doloribus distinctio laborum perferendis ipsam sint est sunt. Ut fugiat architecto tempore et et nobis iste nisi deserunt. Est non est. Cumque necessitatibus optio corrupti."
        },
        {
            "id": 82925784,
            "candidateId": 84815318,
            "candidateName": "John May",
            "companyId": 74578008,
            "companyName": "Tesla",
            "interviewDate": "Sat Aug 28 2021 22:55:21 GMT+0200 (Central European Summer Time)",
            "phase": "mollitia",
            "status": "quibusdam",
            "note": "A excepturi tenetur et. Necessitatibus aut debitis corrupti quod. Dignissimos dolores dolores ea et repellendus molestiae voluptatem fuga."
        },
        {
            "id": 56824836,
            "candidateId": 56479186,
            "candidateName": "Declan Schaden",
            "companyId": 75291264,
            "companyName": "Alphabet",
            "interviewDate": "Sat Aug 28 2021 11:36:05 GMT+0200 (Central European Summer Time)",
            "phase": "nam",
            "status": "voluptate",
            "note": "Accusamus impedit quia harum amet. Voluptatem voluptate blanditiis quia. Praesentium quis ad et omnis illum assumenda ut."
        },
        {
            "id": 6253985,
            "candidateId": 54493806,
            "candidateName": "Tiffany Lynch",
            "companyId": 75291264,
            "companyName": "Alphabet",
            "interviewDate": "Sat Aug 28 2021 15:02:48 GMT+0200 (Central European Summer Time)",
            "phase": "aspernatur",
            "status": "vel",
            "note": "Minus consequatur dicta voluptas et occaecati tempora qui. Assumenda perferendis ut perspiciatis maiores qui laboriosam inventore sequi. Placeat deleniti non vel."
        },
        {
            "id": 91627251,
            "candidateId": 84705028,
            "candidateName": "Cade Hammes",
            "companyId": 75291264,
            "companyName": "Alphabet",
            "interviewDate": "Sat Aug 28 2021 22:06:14 GMT+0200 (Central European Summer Time)",
            "phase": "est",
            "status": "est",
            "note": "Magnam ut corrupti et fugiat. Doloremque nihil qui velit eligendi in. Mollitia ut voluptas quod aut et quia qui tenetur est. Tempore eos eum qui iure quia repellendus harum dolorem qui. Laboriosam optio alias et qui quos ipsa."
        },
        {
            "id": 50196908,
            "candidateId": 38097373,
            "candidateName": "Raul Donnelly",
            "companyId": 75291264,
            "companyName": "Alphabet",
            "interviewDate": "Sun Aug 29 2021 07:25:31 GMT+0200 (Central European Summer Time)",
            "phase": "veniam",
            "status": "accusamus",
            "note": "Enim pariatur quis ut cumque. Officia voluptatem mollitia doloribus. Ut officiis facere. Sint repudiandae ducimus saepe illo incidunt."
        },
        {
            "id": 11603815,
            "candidateId": 57835921,
            "candidateName": "Aisha Dare",
            "companyId": 75291264,
            "companyName": "Alphabet",
            "interviewDate": "Sat Aug 28 2021 18:36:11 GMT+0200 (Central European Summer Time)",
            "phase": "necessitatibus",
            "status": "illum",
            "note": "Libero dolorem atque consequatur sed. Ex temporibus qui. Dolorum animi veniam consequatur omnis et non aspernatur ullam. Quae iure doloribus fugiat."
        },
        {
            "id": 80561530,
            "candidateId": 84852310,
            "candidateName": "Rosalyn Batz DDS",
            "companyId": 75291264,
            "companyName": "Alphabet",
            "interviewDate": "Sun Aug 29 2021 03:18:01 GMT+0200 (Central European Summer Time)",
            "phase": "aspernatur",
            "status": "dolores",
            "note": "Modi ipsum et id nam labore excepturi non sapiente eveniet. Accusantium officia neque blanditiis vitae corrupti minus qui dolor. Neque reiciendis mollitia assumenda occaecati aut in voluptatem quod sapiente. Aut maxime rem doloribus aperiam aut et. Qui quidem non voluptatibus dolor incidunt sequi voluptates aliquid iure."
        },
        {
            "id": 68750887,
            "candidateId": 84815318,
            "candidateName": "John May",
            "companyId": 75291264,
            "companyName": "Alphabet",
            "interviewDate": "Sun Aug 29 2021 01:30:36 GMT+0200 (Central European Summer Time)",
            "phase": "sint",
            "status": "facilis",
            "note": "Iure ea est molestias. Et iste fuga. Delectus corrupti natus impedit architecto temporibus eos quis."
        }
    ];

    //we could use react table hooks instead of bootstrap table
    //https://react-table.tanstack.com/

    return (
        <div className="container mt-4">
            <h1> Reports </h1>
            <table className="table table-bordered table-striped mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th className="col-4">Company</th>
                        <th className="col-4">Interview date</th>
                        <th className="col-4" colSpan="2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((user, index) => {
                        return (<tr key={index}>
                            <td>{user.companyName}</td>
                            <td>{formatDate(user.interviewDate)}</td>
                            <td className="col-10">{user.status}</td>
                            <td className="col-2 text-center">
                                <button className="btn" onClick={viewReport}>
                                    <i className="fas fa-info-circle"></i>
                                </button>
                            </td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}