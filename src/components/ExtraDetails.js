import React from "react";

const ExtraDetails = ({ moviesShow }) => {
  const { network, premiered, genres } = moviesShow;

  return (
    <div class="flex flex-col  w-2/4 my-4">
      <h1 className="text-2xl font-semibold">Exta Movie Details</h1>
      <table class="min-w-full border text-center">
        <tbody>
          <tr class="border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              Name
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              {network?.name}
            </td>
          </tr>
          <tr class="bg-white border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              Country Name
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              {network?.country?.name}
            </td>
          </tr>
          <tr class="bg-white border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              Country Code
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              {network?.country?.code}
            </td>
          </tr>
          <tr class="bg-white border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              Country Timezone
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              {network?.country?.timezone}
            </td>
          </tr>
          <tr class="bg-white border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              Movie Premired
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              {premiered}
            </td>
          </tr>
          <tr class="bg-white border-b">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              Movie Category
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              {genres}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExtraDetails;
