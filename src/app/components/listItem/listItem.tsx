'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import deleteIcon from '../../../../public/img/Delete.svg';
import edit from '../../../../public/img/Edit.svg';
import { User } from '../../../../types';
export interface IListItem {
  sampleTextProp: string;
}

export interface IListItem {
  sampleTextProp: string;
}

export default function ListItem(user: User) {
  const router = useRouter();
  const { id, Name } = user;
  const remove = (id: number) => {
    let dataList: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].id === id) {
        dataList.splice(i, 1);
        localStorage.setItem('users', JSON.stringify(dataList));
      }
    }
  };
  const editUser = (id: number) => {
    localStorage.setItem('editId', id.toString());
    window.location.href = '/editUser';
  };
  const handleDelete = (index: number) => {
    // Display a confirmation dialog to the user
    const confirmDelete = window.confirm('Continue to delete ' + Name + ' ? ');
    remove(id);
  };
  return (
    <>
      <main className="flex flex-col items-center  w-4/5 max-sm:w-full">
        <div className=" font-montserrat text-white flex flex-row justify-between items-center w-2/3 ">
          <h1>{Name}</h1>
          <div className=" w-20">
            <button
              className=" pr-4 w-auto h-auto"
              onClick={() => {
                editUser(id);
              }}
            >
              <Image src={edit} alt={'edit icon'}></Image>
            </button>

            <button className=" w-auto h-auto" onClick={() => handleDelete(id)}>
              <Image src={deleteIcon} alt={'delete icon'}></Image>
            </button>
          </div>
        </div>
        <hr className=" mx-auto border-[#979797] h-full  w-2/3 m-3" />
      </main>
    </>
  );
}
