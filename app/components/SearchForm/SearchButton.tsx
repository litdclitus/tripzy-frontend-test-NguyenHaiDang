import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface SearchButtonProps {
  onClick?: () => void;
}

export default function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <div className="flex justify-center pt-2">
      <Button
        shape="round"
        type="primary"
        size="large"
        icon={<SearchOutlined />}
        onClick={onClick}
      >
        SEARCH
      </Button>
    </div>
  );
}
