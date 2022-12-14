import React, { useContext } from "react";
import { Switch } from "@headlessui/react";
import { replaceVendorWithLogo } from "../utils/replaceVendorWithLogo";
import { AllDeliveriesContext } from "../context/AllDeliveriesContext";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AllDeliveries = () => {
  const { allDeliveries, updateStatus, handleDelete } =
    useContext(AllDeliveriesContext);
  
  return (
    <div className="mt-8 flex flex-col lg:pt-24">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-orange-300 text-gray-900 text-center dark:bg-orange-500 dark:text-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 font-semibold  sm:pl-6"
                  >
                    Vendor
                  </th>
                  <th scope="col" className="px-3 py-3.5  font-semibold ">
                    ETA
                  </th>
                  <th scope="col" className="px-3 py-3.5 font-semibold ">
                    Ticket #
                  </th>
                  <th scope="col" className="px-3 py-3.5  font-semibold ">
                    Comments
                  </th>
                  <th scope="col" className="px-3 py-3.5   font-semibold ">
                    Status
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm bg-blue-100 dark:bg-slate-400  dark:text-slate-800 text-center">
                {allDeliveries.map((delivery) => {
                  const { vendor, eta, ticket, comments, status } =
                    delivery.data;

                  
                  return (
                    <tr key={delivery.id}>
                      <td className="whitespace-nowrap pl-4 py-2 ">
                        {replaceVendorWithLogo(vendor)}
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 ">
                        <div>{eta}
                        </div>
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 ">{ticket}</td>
                      <td className="whitespace-nowrap pl-4 py-2 ">
                        {comments}
                      </td>
                      <td className="whitespace-nowrap pl-4 py-2 ">
                        <Switch
                          checked={status}
                          onChange={() => updateStatus(delivery.id)}
                          className={classNames(
                            status ? "bg-orange-500" : "bg-gray-500",
                            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-0 "
                          )}
                        >
                          <span
                            className={classNames(
                              status ? "translate-x-5" : "translate-x-0",
                              "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                            )}
                          >
                            <span
                              className={classNames(
                                status
                                  ? " opacity-0 ease-out duration-100"
                                  : "opacity-100 ease-in duration-200",
                                "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                              )}
                              aria-hidden="true"
                            >
                              <svg
                                className="h-3 w-3 text-gray-400 "
                                fill="none"
                                viewBox="0 0 12 12"
                              >
                                <path
                                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span
                              className={classNames(
                                status
                                  ? "opacity-100 ease-in duration-200"
                                  : "opacity-0 ease-out duration-100",
                                "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                              )}
                              aria-hidden="true"
                            >
                              <svg
                                className="h-3 w-3 text-orange-400"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                              >
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                              </svg>
                            </span>
                          </span>
                        </Switch>
                      </td>
                      <td className="relative  py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button onClick={() => handleDelete(delivery.id)}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDeliveries;
