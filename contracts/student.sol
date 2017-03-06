pragma solidity ^0.4.2;

contract student
{

    function student()
    {
    }

    struct details

    {

    	bytes32 first_name;
    	bytes32 last_name;
    	uint age;
    	uint phone_number;
    	bytes32 email;

    }

    details [] public student_list;

    function adddetail(bytes32 in_first_name, bytes32 in_last_name, uint in_age, uint in_phone_number ,bytes32 in_email)

    {

      details memory student;
      student.first_name=in_first_name;
      student.last_name=in_last_name;
      student.age=in_age;
      student.phone_number= in_phone_number;
      student.email=in_email;
      student_list.push(student);

    }

    function indexValue() constant returns (bytes32[],bytes32[],bytes32[])

    {
      uint count;
      count=student_list.length;
      uint i;

      bytes32[] memory id_first_name=new bytes32[](count);
      bytes32[] memory id_last_name=new bytes32[](count);
      bytes32[] memory id_email=new bytes32[](count);

      for(i=0;i<count;i++)
      {
        details memory temp;
        temp=student_list[i];
        id_first_name[i]=temp.first_name;
        id_last_name[i]=temp.last_name;
        id_email[i]=temp.email;

      }
      return (id_first_name, id_last_name, id_email);

    }

    function display(uint i) constant returns(bytes32 out_first_name, bytes32 out_last_name, uint out_age , uint out_phone_number, bytes32 out_email)

    {

      details memory temp;
      temp=student_list[i];
      out_first_name=temp.first_name;
      out_last_name=temp.last_name;
      out_age=temp.age;
      out_phone_number=temp.phone_number;
      out_email=temp.email;
      return (out_first_name, out_last_name, out_age, out_phone_number, out_email);

    }

}
