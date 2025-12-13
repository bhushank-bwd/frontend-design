# REST APIs

> Representational State Transfer Application Programming Interface

## Benefits

- Easy of use
- Stateless
  - every time new request/response/authentication
- Scalability
- Flexibility with data i.e. XML/JSON
- Uniform interface HTTP
- Caching
- Separation of concern
  - Backend and frontend are different
- Interoperability language agnostic
- Easy of testing
- security

## Building Block

|          |              |         |
| -------- | ------------ | ------- |
| Response | Status codes | Request |
| URL      | Method       | Headers |

## URL

- Example
  - `https://www.example.com/backend/get?key_1=value_1&key_2=value_2#top`
    - https => Scheme
    - www => sub domain
    - example => domain
    - .com => TLD
    - backend/get => directory/route
    - key_1=value_1&key_2=value_2#top => query string
    - key_1=value_1 => query params
    - #top => fragment

## Method

- POST, GET, PUT, DELETE as per CRUD standard

## Head

## Options

- first request to allow request then actual request
  - google can't request facebook

## Connect and Trace

## Req.body in express

- serialize json data
- data flow between request and response is in serialized json format

## Request Header

| Type            | Use Case                                       | Example                  |
| --------------- | ---------------------------------------------- | ------------------------ |
| Host            | Target Host                                    | api.example.com          |
| Origin          | Origin Host                                    | web.example.com          |
| Referer         | indicate previous web page that making request | web.example.com/products |
| User agent      | Identify client                                | browser/os/version       |
| Accept          | Response content type                          | Application/JSON, XML    |
| Accept Language | Preferred Response Language                    | en-us                    |
| Accept Encoding | Encoding algorithm                             | gzip, br                 |
| Connection      | Keep TCP connection open                       | Keep alive,close         |
| Authorization   | Credentials                                    | Authorization Bearer:    |
| Cookie          | Previous server token can be resend            | key:value                |

## Response Header

| Type             | Use Case                                                   | Example              |
| ---------------- | ---------------------------------------------------------- | -------------------- |
| Date             | when response generated                                    | Thu, 30 Nov...       |
| Server           | Provide server info                                        | nginx                |
| Content-Type     | content type of response                                   | Application/JSON     |
| Content Length   | Origin body response length                                | 256                  |
| Set Cookie       | inform about cookies that need to send for future response | set-cookie:key=value |
| Content Encoding | Response content encoding                                  | br                   |

## Status codes

<table>
    <thead>
        <tr>
            <th>Range</th>
            <th>Use Case </th>
            <th>Codes</th>
            <th>Use Case</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">1XX</td>
            <td rowspan="2">Information</td>
            <td>100</td>
            <td>Please continue</td>
        </tr>
        <tr>
            <td>101</td>
            <td>Switching from REST API to Web Socket </td>
        </tr>
        <tr>
            <td rowspan="5">2XX</td>
            <td rowspan="5">Success</td>
            <td>200</td>
            <td>OK</td>
        </tr>
        <tr>
            <td>201</td>
            <td>Created for post</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Accepted</td>
        </tr>
        <tr>
            <td>204</td>
            <td>No content</td>
        </tr>
        <tr>
            <td>206</td>
            <td>Partial Content for big file</td>
        </tr>
        <tr>
            <td rowspan="4">3XX</td>
            <td rowspan="4">Redirection</td>
            <td>301</td>
            <td>Moved permanently</td>
        </tr>
        <tr>
            <td>302</td>
            <td>Temporary moved</td>
        </tr>
        <tr>
            <td>307</td>
            <td>Similar to 301 but retain method post</td>
        </tr>
        <tr>
            <td>308</td>
            <td>Similar to 302 but retain method post</td>
        </tr>
        <tr>
            <td rowspan="5">4XX</td>
            <td rowspan="5">Client Error</td>
            <td>400</td>
            <td>Bad request</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Authentication</td>
        </tr>
        <tr>
            <td>403</td>
            <td>Authorization</td>
        </tr>
        <tr>
            <td>404</td>
            <td>No data available</td>
        </tr>
        <tr>
            <td>405</td>
            <td>Method Not allowed</td>
        </tr>
        <tr>
            <td rowspan="5">5XX</td>
            <td rowspan="5">Server Error</td>
            <td>500</td>
            <td>Internal server error</td>
        </tr>
        <tr>
            <td>502</td>
            <td>Bad gateway</td>
        </tr>
        <tr>
            <td>503</td>
            <td>Service not available</td>
        </tr>
        <tr>
            <td>504</td>
            <td>Gateway Time out</td>
        </tr>
        <tr>
            <td>507</td>
            <td>Insufficient storage</td>
        </tr>
    </tbody>
</table>
