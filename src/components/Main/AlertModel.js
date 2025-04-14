import React, { useState, useEffect } from 'react';

function AlertModel (){
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      // يظهر المودال أول ما يفتح المستخدم الصفحة
      setShowModal(true);
    }, []);
  
    const closeModal = () => {
      setShowModal(false);
    };
return(
    showModal && (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40 text-center">
    <div className="relative p-4 w-full max-w-80 max-h-full">
      <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white justify-center m-auto">
            تنبية هام ⚠️
          </h3>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            جميع التقييمات بناء على تجربة شخصية وليست هبد 🥲
          </p>
        </div>
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 justify-center m-auto">
          <button onClick={closeModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">موافق</button>
        </div>
      </div>
    </div>
  </div>
    )
)
}
export default AlertModel;