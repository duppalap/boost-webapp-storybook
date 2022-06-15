import { Icon } from '@iconify/react';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ListButtonProps {
  to?: string;
  onClick?: any;
}
function ListButton({ to, onClick }: ListButtonProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (to) {
      navigate(to);
    } else {
      onClick();
    }
  };

  return (
    <Tooltip title="Edit">
      <IconButton component="span" onClick={() => handleNavigate()}>
        <Icon icon={'ci:edit'} width={24} height={24} />
      </IconButton>
    </Tooltip>
  );
}

export default ListButton;
